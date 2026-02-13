from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///todo.db"
db = SQLAlchemy(app)

class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200), nullable = False)
    description = db.Column(db.String(500), nullable = False)
    date_created = db.Column(db.DateTime, default=lambda:datetime.now(timezone.utc))

    def __repr__(self):
        return f"{self.sno} - {self.title}"


@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        todo = Todo(title = title, description = description)
        db.session.add(todo)
        db.session.commit()
    allTodo = Todo.query.all() 
    return render_template("index.html", allTodo = allTodo)


@app.route("/update/<int:sno>", methods=["GET", "POST"])
def update(sno):
    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        todo = Todo.query.filter_by(sno=sno).first()
        todo.title = title
        todo.description = description
        db.session.add(todo)
        db.session.commit()
        return redirect("/")

    todo = Todo.query.filter_by(sno=sno).first()
    print(todo)
    return render_template("update.html",todo=todo)

@app.route("/delete/<int:sno>")
def delete(sno):
    todo = Todo.query.filter_by(sno=sno).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")

@app.route("/search")
def search():
    query = request.args.get('search_query', '')
    if query:
        results = Todo.query.filter(Todo.title.ilike(f"%{query}%")).all()
    else:
        results = []
    return render_template("index.html", allTodo=results)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
     with app.app_context():
        db.create_all()
     app.run(debug=True, port=7000)