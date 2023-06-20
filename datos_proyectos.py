proyectos = [
    {
        'id': 1,
        'titulo': 'Climaqui',
        'descripcion': 'Obten el clima actual de tu ubicación, las temperaturas máximas y mínimas y pronóstico.',
        'imagen_id': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81pwCUbOeP6b9eWlmrWn9odkCcqaSP70RQ3_5pbKlwd5do2FLULNNTK6fWK-JePwWvYrCmIoiFYrjjyYNyvIPMeCUs8StA=w1920-h961',
        'url_proyecto': 'https://climaqui.vercel.app/',
    },
    {
        'id': 2,
        'titulo': 'GiffApp',
        'descripcion': 'Busca y comparte gifs',
        'imagen_id': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qYwtX40XcP1tV_41ipFhvNtHsSCcdo0QIawV6ubrxOY0I9-hZU1VXQqJcdintvm9H1aAA6BOcHaMsMxN-VjPZtRK5kkw=w1920-h961', 
        'url_proyecto': 'https://giffapp.netlify.app/',
    },
    {
        'id': 3,
        'titulo': 'Gitclonatore',
        'descripcion': 'GitClonatore es una herramienta de línea de comandos que te permite clonar repositorios de GitHub de un usuario específico.',
        'imagen_id': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81rCK6-wD8yhChUUkstF9X8mQBd6pgcpGbhOtqQXg6jx7LfX7Oo3ytfVKSEPh-ouvKjp_HbIU3PSsYU35m77_sRl4z5ZTw=w1920-h961', 
        'url_proyecto': 'https://github.com/lucio-crDEV/gitclonatore',
    },
    {
        'id': 4,
        'titulo': 'Barrio Panal',
        'descripcion': 'Red social para conectar las municipalidades con los vecinos y potenciar prácticas sustentables. Buscamos fomentar la Educación Ambiental y la Participación Ciudadana.',
        'imagen_id': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81p4r9Hpmnc6Xl6LtIvOvzWGFEliC5uQe2TTig-LBMT98Ltpsrm-EpekxCIGklwj4lh2Yspp5PufCObbAoijwqCh6xgq=w1920-h961', 
        'url_proyecto': 'https://barriopanal.cl/',
    },

    # Agrega más proyectos según sea necesario
]

def buscar_proyecto_por_id(id):
    for proyecto in proyectos:
        if proyecto['id'] == id:
            return proyecto
    return None
