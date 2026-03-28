import re

with open(r'c:\Users\UserPC\Downloads\stitch_weld_bear_edu_blueprint_industrial_prd\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const slides = \[(.*?)\];', content, re.DOTALL)
if match:
    slides_str = match.group(1)
    # Split by comma but handle potential quotes
    slides = re.findall(r'"(.*?)"', slides_str)
    for i, slide in enumerate(slides):
        if "tipos_de_llama" in slide or "redes_sociales" in slide or "boquillas" in slide:
            print(f"{i}: {slide}")
else:
    print("Could not find slides array")
