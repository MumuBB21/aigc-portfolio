export const works = {
  characters: {
    title: { en: "Character Design", zh: "人物设计图" },
    ratio: 3 / 4,
    images: Array.from({ length: 8 }, (_, i) => ({
      id: `char-${i + 1}`,
      placeholder: `https://placehold.co/600x800/1a1a25/ff7eb9?text=Char+${i + 1}`
    })),
    notes: {
      tools: [
        "Midjourney v6 + ControlNet",
        "DALL·E 3 + Prompt Refinement",
        "Photoshop + Layer Masking",
        "ClipDrop + Background Removal"
      ],
      tech: [
        "Pose control via OpenPose map",
        "Style consistency using LoRA training",
        "Lighting matching with HDR environment",
        "Multi-pass refinement for skin texture"
      ],
      workflow: [
        "Moodboard → Concept Sketch → Prompt",
        "Generate 10 variations → Select best pose",
        "Apply depth map → Adjust lighting",
        "Add accessories → Final composite → Export"
      ]
    }
  },
  architecture: {
    title: { en: "Architecture Concepts", zh: "建筑概念 / 效果图" },
    ratio: 16 / 9,
    images: Array.from({ length: 8 }, (_, i) => ({
      id: `arch-${i + 1}`,
      placeholder: `https://placehold.co/1200x675/1a1a25/5a8fff?text=Arch+${i + 1}`
    })),
    notes: {
      tools: [
        "Midjourney v6 + Depth Map",
        "Stable Diffusion 3 + ControlNet",
        "Blender Cycles + PBR Materials",
        "Photoshop + Light Pass Compositing"
      ],
      tech: [
        "Perspective control via depth map projection",
        "PBR material simulation for realism",
        "HDRI environment lighting integration",
        "Multi-layer compositing for depth of field"
      ],
      workflow: [
        "Concept → Sketch → Prompt Iteration",
        "Generate base image → Apply depth map",
        "Import into Blender → Add 3D geometry",
        "Render light pass → Composite in Photoshop"
      ]
    }
  },
  posters: {
    title: { en: "Poster & Illustration", zh: "海报底图 / 插画" },
    ratio: 1,
    images: Array.from({ length: 8 }, (_, i) => ({
      id: `poster-${i + 1}`,
      placeholder: `https://placehold.co/800x800/1a1a25/ff9e5a?text=Poster+${i + 1}`
    })),
    notes: {
      tools: [
        "Midjourney + Text-to-Image",
        "Adobe Firefly + Generative Fill",
        "Photoshop + Vector Tracing",
        "Procreate + Hand-drawn Details"
      ],
      tech: [
        "Text-to-image composition with layout guide",
        "Layer blending for foreground/background",
        "Vector tracing for scalable elements",
        "Color grading for mood consistency"
      ],
      workflow: [
        "Theme → Moodboard → Prompt",
        "Generate 5 compositions → Choose best layout",
        "Add text layers → Adjust contrast & saturation",
        "Export as PNG/SVG → Final review → Publish"
      ]
    }
  }
};