import { Reveal } from "@/components/ui/Reveal";

interface StackLogo {
  name: string;
  src: string;
  darkSrc?: string;
}

interface StackCategory {
  title: string;
  items: StackLogo[];
}

const stackCategories: StackCategory[] = [
  {
    title: "Backend",
    items: [
      { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Firebase", src: "https://cdn.simpleicons.org/firebase/DD2C00" }
    ]
  },
  {
    title: "Data Visualization",
    items: [
      { name: "Pandas", src: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", src: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Matplotlib", src: "https://cdn.simpleicons.org/plotly/3F4F75" },
      { name: "Plotly", src: "https://cdn.simpleicons.org/plotly/3F4F75" },
      { name: "Seaborn", src: "https://cdn.simpleicons.org/chartdotjs/FF6384" },
      { name: "SciPy", src: "https://cdn.simpleicons.org/scipy/8CAAE6" }
    ]
  },
  {
    title: "AI",
    items: [
      { name: "Hugging Face", src: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "OpenRouter", src: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128" },
      { name: "LangChain", src: "https://www.google.com/s2/favicons?domain=langchain.com&sz=128" },
      { name: "LlamaIndex", src: "https://www.google.com/s2/favicons?domain=llamaindex.ai&sz=128" }
    ]
  },
  {
    title: "Machine Learning",
    items: [
      { name: "PyTorch", src: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "scikit-learn", src: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "OpenCV", src: "https://cdn.simpleicons.org/opencv/5C3EE8" }
    ]
  },
  {
    title: "AI Agents",
    items: [
      { name: "LangGraph", src: "https://www.google.com/s2/favicons?domain=langchain.com&sz=128" },
      { name: "AutoGen", src: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
      { name: "CrewAI", src: "https://www.google.com/s2/favicons?domain=crewai.com&sz=128" }
    ]
  },
  {
    title: "Automation",
    items: [
      { name: "n8n", src: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Zapier", src: "https://cdn.simpleicons.org/zapier/FF4F00" },
      { name: "Make", src: "https://www.google.com/s2/favicons?domain=make.com&sz=128" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Redis", src: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ]
  },
  {
    title: "Deployment",
    items: [
      { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "AWS", src: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
      { name: "Streamlit", src: "https://cdn.simpleicons.org/streamlit/FF4B4B" }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
      {
        name: "GitHub",
        src: "https://cdn.simpleicons.org/github/111111",
        darkSrc: "https://cdn.simpleicons.org/github/f6f7f8"
      },
      {
        name: "Vercel",
        src: "https://cdn.simpleicons.org/vercel/111111",
        darkSrc: "https://cdn.simpleicons.org/vercel/f6f7f8"
      }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Next.js",
        src: "https://cdn.simpleicons.org/nextdotjs/111111",
        darkSrc: "https://cdn.simpleicons.org/nextdotjs/f6f7f8"
      },
      { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E" }
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="site-container section-block">
      <Reveal>
        <p className="section-eyebrow">Tech Stack</p>
        <h2 className="section-title">Core technologies behind the systems I build.</h2>
        <p className="section-copy mt-5">
          A focused stack across frontend, backend, AI workflows, data systems, and product
          infrastructure.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8">
        {stackCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 70}>
            <div className="border-t border-[var(--border)] pt-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <p className="mono min-w-[11rem] text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {category.title}
                </p>

                <div className="flex flex-wrap gap-5 lg:flex-1 lg:justify-start">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex h-12 w-12 items-center justify-center"
                      title={item.name}
                      aria-label={item.name}
                    >
                      {item.darkSrc ? (
                        <>
                          <img
                            src={item.src}
                            alt={item.name}
                            className="h-9 w-9 object-contain dark:hidden"
                            loading="lazy"
                          />
                          <img
                            src={item.darkSrc}
                            alt={item.name}
                            className="hidden h-9 w-9 object-contain dark:block"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.name}
                          className="h-9 w-9 object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
