export const works = {
  characters: {
    title: { en: "Character Design", zh: "人物设计图" },
    ratio: 3 / 4,
    images: [
      { id: 'char-01', placeholder: '/images/characters/char_01.png' },
      { id: 'char-02', placeholder: '/images/characters/char_02.png' },
      { id: 'char-03', placeholder: '/images/characters/char_03.png' },
      { id: 'char-04', placeholder: '/images/characters/char_04.png' },
      { id: 'char-05', placeholder: '/images/characters/char_05.png' },
      { id: 'char-06', placeholder: '/images/characters/char_06.png' },
      { id: 'char-07', placeholder: '/images/characters/char_07.png' },
      { id: 'char-08', placeholder: '/images/characters/char_08.png' }
    ],
    notes: {
      tools: [
        "Midjourney v7 + ControlNet",
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
    images: [
      { id: 'arch-01', placeholder: '/images/architecture/arch_01.png' },
      { id: 'arch-02', placeholder: '/images/architecture/arch_02.png' },
      { id: 'arch-03', placeholder: '/images/architecture/arch_03.png' },
      { id: 'arch-04', placeholder: '/images/architecture/arch_04.png' },
      { id: 'arch-05', placeholder: '/images/architecture/arch_05.png' },
      { id: 'arch-06', placeholder: '/images/architecture/arch_06.png' },
      { id: 'arch-07', placeholder: '/images/architecture/arch_07.png' },
      { id: 'arch-08', placeholder: '/images/architecture/arch_08.png' }
    ],
    notes: {
      tools: [
        "Midjourney v7 + Depth Map",
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
    images: [
      { id: 'poster-01', placeholder: '/images/posters/post_01.png' },
      { id: 'poster-02', placeholder: '/images/posters/post_02.png' },
      { id: 'poster-03', placeholder: '/images/posters/post_03.png' },
      { id: 'poster-04', placeholder: '/images/posters/post_04.png' },
      { id: 'poster-05', placeholder: '/images/posters/post_05.png' },
      { id: 'poster-06', placeholder: '/images/posters/post_06.png' },
      { id: 'poster-07', placeholder: '/images/posters/post_07.png' },
      { id: 'poster-08', placeholder: '/images/posters/post_08.png' }
    ],
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