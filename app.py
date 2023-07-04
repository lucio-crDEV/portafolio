from flask import Flask, render_template, redirect, request
from datos_proyectos import proyectos

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/home')

@app.route('/home')
def portafolio():
    return render_template('portafolio.html', proyectos=proyectos)

@app.errorhandler(404)
def page_not_found(error):
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
