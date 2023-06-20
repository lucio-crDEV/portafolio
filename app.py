from flask import Flask, render_template, redirect
from datos_proyectos import proyectos
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/home')

@app.route('/home')
def portafolio():
    return render_template('portafolio.html', proyectos=proyectos)

if __name__ == '__main__':
    app.run(debug=True)
