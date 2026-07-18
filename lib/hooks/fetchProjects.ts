export interface ProjectData {
  thumbnailGradient: string;
  thumbnailUrl?: string;
  title: string;
  description: string;
  techNames: string[];
  href?: string;
}

export interface UseProjectInput {
  github?: string;
  url?: string;
  title?: string;
  description?: string;
  techStack?: string[];
}

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

function getGradient(language: string): string {
  return languageGradients[language.toLowerCase()] ?? defaultGradient;
}

async function fetchOGImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.image?.url ?? null;
  } catch {
    return null;
  }
}

function parseGithubUrl(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

export async function fetchProject(input: UseProjectInput): Promise<ProjectData> {
  const { github, url, title: explicitTitle, description: explicitDesc, techStack: explicitTech = [] } = input;

  if (!github) {
    return {
      thumbnailGradient: defaultGradient,
      title: explicitTitle ?? "Untitled Project",
      description: explicitDesc ?? "",
      techNames: explicitTech,
      href: url,
    };
  }

  const repo = parseGithubUrl(github);
  if (!repo) {
    return {
      thumbnailGradient: defaultGradient,
      title: explicitTitle ?? "Untitled Project",
      description: explicitDesc ?? "Invalid GitHub URL",
      techNames: explicitTech,
      href: url,
    };
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    const data = await res.json();

    const repoUrl = `https://github.com/${repo.owner}/${repo.repo}`;
    const fetchedTitle: string = data.name ?? "";
    const fetchedDesc: string = data.description ?? "";
    const fetchedLanguage: string = data.language ?? "";

    let fetchedLanguages: string[] = [];
    try {
      const langRes = await fetch(
        `https://api.github.com/repos/${repo.owner}/${repo.repo}/languages`,
        { next: { revalidate: 3600 } }
      );
      if (langRes.ok) {
        fetchedLanguages = Object.keys(await langRes.json());
      }
    } catch {}

    const title = explicitTitle ?? (fetchedTitle || "Untitled Project");
    const description = explicitDesc ?? fetchedDesc ?? "";
    const primaryLang = fetchedLanguage || (explicitTech[0] ?? "");
    const techNames =
      explicitTech.length > 0
        ? explicitTech
        : fetchedLanguages.length > 0
          ? fetchedLanguages
          : primaryLang
            ? [primaryLang]
            : [];

    let thumbnailUrl: string | undefined = undefined;
    if (url) {
      const img = await fetchOGImage(url);
      thumbnailUrl = img ?? undefined;
    }

    return {
      thumbnailGradient: getGradient(primaryLang || techNames[0] || ""),
      title,
      description,
      techNames,
      thumbnailUrl,
      href: url ?? repoUrl,
    };
  } catch {
    return {
      thumbnailGradient: defaultGradient,
      title: explicitTitle ?? "Untitled Project",
      description: explicitDesc ?? "Failed to fetch repo",
      techNames: explicitTech,
      href: url,
    };
  }
}

export async function fetchAllProjects(configs: UseProjectInput[]): Promise<ProjectData[]> {
  return Promise.all(configs.map(fetchProject));
}
