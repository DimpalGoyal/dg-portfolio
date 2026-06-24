import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  CodeIcon,
} from "../icons";

interface TechItem {
  icon: ReactNode;
  label: string;
}

export interface ProjectData {
  thumbnailGradient: string;
  thumbnailUrl?: string;
  title: string;
  description: string;
  techStack: TechItem[];
  href?: string;
}

export interface UseProjectInput {
  github?: string;
  url?: string;
  title?: string;
  description?: string;
  techStack?: string[];
}

export interface UseProjectResult {
  project: ProjectData | null;
  loading: boolean;
  error: string | null;
}

const techIcons: Record<string, ReactNode> = {
  react: <ReactIcon />,
  reactjs: <ReactIcon />,
  typescript: <TypeScriptIcon />,
  ts: <TypeScriptIcon />,
  tailwind: <TailwindIcon />,
  tailwindcss: <TailwindIcon />,
  node: <NodeIcon />,
  nodejs: <NodeIcon />,
  python: <PythonIcon />,
};

const languageGradients: Record<string, string> = {
  typescript: "from-blue-500 to-cyan-600",
  javascript: "from-yellow-400 to-orange-500",
  python: "from-blue-600 to-yellow-400",
  rust: "from-orange-600 to-gray-800",
  go: "from-cyan-400 to-blue-600",
  java: "from-red-500 to-orange-600",
  kotlin: "from-purple-500 to-orange-400",
  swift: "from-orange-500 to-red-500",
  c: "from-blue-600 to-gray-600",
  "c++": "from-blue-500 to-purple-600",
  "c#": "from-green-500 to-purple-600",
  ruby: "from-red-600 to-red-400",
  php: "from-indigo-400 to-pink-500",
  scala: "from-red-600 to-orange-500",
  elixir: "from-purple-500 to-blue-500",
  haskell: "from-purple-600 to-gray-700",
};

const defaultGradient = "from-purple-500 to-pink-600";

function getIcon(techName: string): ReactNode {
  const key = techName.toLowerCase().replace(/\s+/g, "");
  return techIcons[key] ?? <CodeIcon />;
}

function getGradient(language: string): string {
  return languageGradients[language.toLowerCase()] ?? defaultGradient;
}

async function fetchOGImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
    )
    if (!res.ok) return null
    const data = await res.json()
    return data?.data?.image?.url ?? null
  } catch {
    return null
  }
}

function parseGithubUrl(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

export function useProject(input: UseProjectInput): UseProjectResult {
  const { github, url, title: explicitTitle, description: explicitDesc } = input
  const techStackKey = JSON.stringify(input.techStack ?? [])
  const [project, setProject] = useState<ProjectData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState<string | undefined>()

  useEffect(() => {
    let cancelled = false
    const explicitTech: string[] = JSON.parse(techStackKey)

    if (!github) {
      const techItems = explicitTech.map((t) => ({
        icon: getIcon(t),
        label: t,
      }))
      setProject({
        thumbnailGradient: defaultGradient,
        title: explicitTitle ?? "Untitled Project",
        description: explicitDesc ?? "",
        techStack: techItems,
        href: url,
      })
      setLoading(false)
      setError(null)
      return
    }

    const repo = parseGithubUrl(github)
    if (!repo) {
      setError("Invalid GitHub URL")
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
        )
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`)
        const data = await res.json()

        const repoUrl = `https://github.com/${repo.owner}/${repo.repo}`
        const fetchedTitle: string = data.name ?? ""
        const fetchedDesc: string = data.description ?? ""
        const fetchedLanguage: string = data.language ?? ""

        let fetchedLanguages: string[] = []
        try {
          const langRes = await fetch(
            `https://api.github.com/repos/${repo.owner}/${repo.repo}/languages`,
          )
          if (langRes.ok) {
            fetchedLanguages = Object.keys(await langRes.json())
          }
        } catch {}

        if (!cancelled) {
          const title = explicitTitle ?? (fetchedTitle || "Untitled Project")
          const description = explicitDesc ?? fetchedDesc ?? ""
          const primaryLang = fetchedLanguage || (explicitTech[0] ?? "")
          const techNames =
            explicitTech.length > 0
              ? explicitTech
              : fetchedLanguages.length > 0
                ? fetchedLanguages
                : primaryLang
                  ? [primaryLang]
                  : []
          const techItems = techNames.map((t) => ({
            icon: getIcon(t),
            label: t,
          }))

          setProject({
            thumbnailGradient: getGradient(primaryLang || techNames[0] || ""),
            title,
            description,
            techStack: techItems,
            href: url ?? repoUrl,
          })
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to fetch repo")
          setLoading(false)
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [github, url, explicitTitle, explicitDesc, techStackKey])

  useEffect(() => {
    if (!url) {
      setThumbnailUrl(undefined)
      return
    }

    let cancelled = false

    fetchOGImage(url).then((img) => {
      if (!cancelled) {
        setThumbnailUrl(img ?? undefined)
      }
    })

    return () => {
      cancelled = true
    }
  }, [url])

  const result = project ? { ...project, thumbnailUrl } : null
  return { project: result, loading, error }
}
