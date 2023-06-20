from flask import Flask, render_template, redirect
from datos_proyectos import proyectos, buscar_proyecto_por_id
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/home')

@app.route('/home')
def portafolio():
    return render_template('portafolio.html', proyectos=proyectos)

@app.route('/proyecto/<int:id>')
def mostrar_proyecto(id):
    proyecto = buscar_proyecto_por_id(id)
    if proyecto:
        return render_template('proyecto.html', proyecto=proyecto)
    else:
        return 'Proyecto no encontrado'

if __name__ == '__main__':
    app.run(port=5001)
