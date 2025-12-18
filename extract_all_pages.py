
import fitz  # PyMuPDF
import os
import glob

# Project mapping
# Project 1: BAAC / Sécurité Routière
# Project 2: Beïtea
# Project 3: Northwind / Société de Fournitures
# Project 4: Edu Quiet / Video AI ??
# Project 5: EcoWise
# Project 6: Video AI (Production Vidéo)

project_dirs = [
    "Projet 1", "Projet 2", "Projet 3", "Projet 4", "Projet 5", "Projet 6"
]

output_dir = "public/images"
os.makedirs(output_dir, exist_ok=True)

for p_dir in project_dirs:
    # Find PDF in directory
    search_path = os.path.join(p_dir, "*.pdf")
    pdfs = glob.glob(search_path)
    
    if not pdfs:
        print(f"No PDF found in {p_dir}")
        continue
        
    pdf_path = pdfs[0]
    print(f"Processing {pdf_path}...")
    
    try:
        doc = fitz.open(pdf_path)
        project_name = p_dir.replace(" ", "_").lower()
        
        for i, page in enumerate(doc):
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for better quality
            output_filename = f"{project_name}_page_{i+1}.png"
            output_path = os.path.join(output_dir, output_filename)
            pix.save(output_path)
            print(f"Saved {output_path}")
            
        doc.close()
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

print("Extraction complete.")
