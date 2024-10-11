from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates'))
template = env.get_template('spur_gear_ui.html')
output_from_parsed_template = template.render()

print(output_from_parsed_template)

# para salvar os resultados
with open("gear_generator.html", "w") as fh:
    fh.write(output_from_parsed_template)