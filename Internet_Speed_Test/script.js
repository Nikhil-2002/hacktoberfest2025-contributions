// Internet Speed Test (download + ping)
// Author: Prasadsing Solanki 
// Notes: Uses streaming download via fetch + ReadableStream to measure throughput in real-time.

// DOMconst themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');

    function setTheme(theme) {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      if (theme === 'light') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
      } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
      }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Page Navigation
    const landingPage = document.getElementById('landingPage');
    const testPage = document.getElementById('testPage');
    const goToTestBtn = document.getElementById('goToTest');
    const backBtn = document.getElementById('backBtn');

    goToTestBtn.addEventListener('click', () => {
      landingPage.classList.add('hidden');
      testPage.classList.add('visible');
    });

    backBtn.addEventListener('click', () => {
      testPage.classList.remove('visible');
      landingPage.classList.remove('hidden');
    });

    // Speed Test Logic
    const startBtn = document.getElementById('startBtn');
    const urlInput = document.getElementById('url');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const pingEl = document.getElementById('ping');
    const downloadEl = document.getElementById('download');
    const elapsedEl = document.getElementById('elapsed');
    const bytesEl = document.getElementById('bytes');
    const throughputEl = document.getElementById('throughput');
    const repeatCheckbox = document.getElementById('repeat');
    const showBytes = document.getElementById('showBytes');

    let controller = null;

    function formatBytes(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024*1024) return (bytes/1024).toFixed(2) + ' KB';
      return (bytes/(1024*1024)).toFixed(2) + ' MB';
    }

    function setProgress(percent, text) {
      progressBar.style.width = percent + '%';
      progressText.textContent = text;
    }

    async function measurePing(testUrl, attempts = 4) {
      let times = [];
      for (let i = 0; i < attempts; i++) {
        const t0 = performance.now();
        try {
          await fetch(testUrl + '?_ping=' + Date.now() + Math.random(), { method: 'GET', cache: 'no-store', mode: 'cors' });
          const t1 = performance.now();
          times.push(t1 - t0);
        } catch (err) {
          times.push(9999);
        }
      }
      times.sort((a,b)=>a-b);
      const trimmed = times.slice(0, Math.max(1, Math.floor(times.length * 0.75)));
      const avg = trimmed.reduce((a,b)=>a+b,0)/trimmed.length;
      return Math.round(avg);
    }

    async function downloadTest(testUrl, onProgress) {
      controller = new AbortController();
      const signal = controller.signal;
      const cacheBusted = testUrl + (testUrl.includes('?') ? '&' : '?') + '_cb=' + Date.now() + Math.random();

      const startTime = performance.now();
      let bytes = 0;

      const resp = await fetch(cacheBusted, { method: 'GET', cache: 'no-store', mode: 'cors', signal });
      if (!resp.ok) throw new Error('Request failed: ' + resp.status);

      const reader = resp.body && resp.body.getReader();
      if (!reader) {
        const blob = await resp.blob();
        bytes = blob.size;
        const seconds = (performance.now() - startTime) / 1000;
        onProgress(bytes, seconds);
        return { bytes, seconds };
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += (value ? value.length : value.byteLength || 0);
        const elapsed = (performance.now() - startTime) / 1000;
        onProgress(bytes, elapsed);
      }

      const seconds = (performance.now() - startTime) / 1000;
      return { bytes, seconds };
    }

    function bpsToMbps(bps) {
      return (bps / 1_000_000).toFixed(2);
    }

    async function runTestOnce(testUrl) {
      setProgress(5, 'Measuring ping...');
      const pingMs = await measurePing(testUrl, 3);
      pingEl.textContent = (pingMs === 9999) ? '—' : pingMs + ' ms';

      setProgress(10, 'Starting download...');
      let lastBytes = 0;
      let lastTime = performance.now();
      let bestMbps = 0;
      
      const onProgress = (bytes, elapsedSeconds) => {
        const now = performance.now();
        const deltaTime = (now - lastTime) / 1000;
        const deltaBytes = bytes - lastBytes;
        
        if (deltaTime > 0.25) {
          const bitsPerSec = (deltaBytes * 8) / deltaTime;
          const mbps = bitsPerSec / 1_000_000;
          if (mbps > bestMbps) bestMbps = mbps;
          
          const percent = Math.min(100, Math.round((bytes / (10*1024*1024)) * 100));
          setProgress(percent, `${mbps.toFixed(2)} Mbps`);
          downloadEl.textContent = mbps.toFixed(2) + ' Mbps';
          elapsedEl.textContent = elapsedSeconds.toFixed(2) + ' s';
          bytesEl.textContent = showBytes.checked ? bytes + ' bytes' : formatBytes(bytes);
          throughputEl.textContent = bpsToMbps((bytes * 8) / Math.max(0.0001, elapsedSeconds)) + ' Mbps';
          lastBytes = bytes;
          lastTime = now;
        }
      };

      try {
        const { bytes, seconds } = await downloadTest(testUrl, onProgress);
        const bits = bytes * 8;
        const avgBps = bits / seconds;
        const avgMbps = avgBps / 1_000_000;
        setProgress(100, `${avgMbps.toFixed(2)} Mbps (done)`);
        downloadEl.textContent = avgMbps.toFixed(2) + ' Mbps';
        elapsedEl.textContent = seconds.toFixed(2) + ' s';
        bytesEl.textContent = showBytes.checked ? bytes + ' bytes' : formatBytes(bytes);
        throughputEl.textContent = bpsToMbps(avgBps) + ' Mbps';
        return { pingMs, avgMbps, bytes, seconds };
      } catch (err) {
        setProgress(0, 'Error');
        console.error(err);
        throw err;
      } finally {
        controller = null;
      }
    }

    startBtn.addEventListener('click', async () => {
      const testUrl = urlInput.value.trim();
      if (!testUrl) {
        alert('Enter a test file URL (example: https://speed.hetzner.de/10MB.bin)');
        return;
      }

      startBtn.disabled = true;
      startBtn.textContent = 'Testing...';
      setProgress(2, 'Preparing...');

      try {
        if (repeatCheckbox.checked) {
          const runs = 3;
          let totalMbps = 0;
          let totalPing = 0;
          for (let i = 0; i < runs; i++) {
            setProgress(1 + i * (90 / runs), `Run ${i+1} of ${runs}...`);
            const res = await runTestOnce(testUrl);
            totalMbps += res.avgMbps;
            totalPing += (res.pingMs === 9999 ? 0 : res.pingMs);
            await new Promise(r => setTimeout(r, 600));
          }
          const avgMbps = totalMbps / runs;
          const avgPing = Math.round(totalPing / runs);
          pingEl.textContent = (avgPing === 0 ? '—' : avgPing + ' ms');
          downloadEl.textContent = avgMbps.toFixed(2) + ' Mbps';
          setProgress(100, `Average: ${avgMbps.toFixed(2)} Mbps`);
        } else {
          await runTestOnce(testUrl);
        }
      } catch (err) {
        alert('Test failed. See console for details. Possible causes: CORS blocked, server unavailable, or network error.');
      } finally {
        startBtn.disabled = false;
        startBtn.textContent = 'Start Test';
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && controller) {
        controller.abort();
        setProgress(0, 'Aborted');
        startBtn.disabled = false;
        startBtn.textContent = 'Start Test';
      }
    });