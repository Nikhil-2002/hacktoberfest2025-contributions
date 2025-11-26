import { HeartPulse, Activity, Thermometer, Brain, Droplets } from "lucide-react";

// Example data (you can keep your `healthData.js` if you already have one)
const healthIndicators = [
  {
    organ: "Heart",
    status: "Healthy",
    color: "from-green-400 to-green-600",
    icon: <HeartPulse />,
  },
  {
    organ: "Lungs",
    status: "Stable",
    color: "from-blue-400 to-blue-600",
    icon: <Activity />,
  },
  {
    organ: "Temperature",
    status: "Slight Fever",
    color: "from-yellow-400 to-orange-500",
    icon: <Thermometer />,
  },
  {
    organ: "Brain",
    status: "Normal Activity",
    color: "from-indigo-400 to-indigo-600",
    icon: <Brain />,
  },
  {
    organ: "Hydration",
    status: "Needs Attention",
    color: "from-cyan-400 to-blue-500",
    icon: <Droplets />,
  },
];

export default function HealthStatusCards() {
  return (
    <section className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-inner">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">
        🩺 Health Status Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl">{item.icon}</div>
              <span
                className={`text-sm font-medium ${
                  item.status === "Healthy"
                    ? "text-green-50"
                    : item.status === "Needs Attention"
                    ? "text-yellow-100"
                    : "text-blue-50"
                }`}
              >
                {item.status}
              </span>
            </div>

            <h4 className="text-xl font-semibold">{item.organ}</h4>
            <p className="mt-2 text-sm opacity-90">
              Status: <span className="font-medium">{item.status}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
