import re
import os

html_path = 'd:/modern-photo-sorter/frontend/index.html'
css_path = 'd:/modern-photo-sorter/frontend/styles.css'
js_path = 'd:/modern-photo-sorter/frontend/app.js'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract CSS
style_match = re.search(r'<style>(.*?)</style>', content, flags=re.DOTALL)
if style_match:
    css_content = style_match.group(1).strip()
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)
    content = content[:style_match.start()] + '<link rel="stylesheet" href="/styles.css">\n' + content[style_match.end():]
    print('Extracted CSS.')

# Extract JS
# Because index.html has tailwind script and lucide script, we want the LAST big script block
script_matches = list(re.finditer(r'<script>(.*?)</script>', content, flags=re.DOTALL))
if script_matches:
    last_script = script_matches[-1]
    js_content = last_script.group(1).strip()
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    content = content[:last_script.start()] + '<script src="/app.js"></script>\n' + content[last_script.end():]
    print('Extracted JS.')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated index.html.')
