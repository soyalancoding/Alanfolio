import fs from "fs";
import path from "path";

const techs = {
  Astro: "astro",
  Angular: "angular",
  React: "react",
  "Vue.js": "vuejs",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwindcss",
  TypeScript: "typescript",
  JavaScript: "javascript",
  HTML5: "html5",
  CSS3: "css3",
  SASS: "sass",
  Bash: "bash",
  "Node.js": "nodejs",
  Java: "java",
  Python: "python",
  FastAPI: "fastapi",
  Flask: "flask",
  Django: "django",
  Firebase: "firebase",
  MongoDB: "mongodb",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Jenkins: "jenkins",
  Ansible: "ansible",
  RabbitMQ: "rabbitmq",
  "Amazon Web Services": "amazonwebservices",
  "Google Cloud Platform": "googlecloud",
  Git: "git",
  GitHub: "github",
  GitLab: "gitlab",
  Bitbucket: "bitbucket",
  Jira: "jira",
  Figma: "figma",
  Docker: "docker",
  Linux: "linux",
  "Red Hat": "redhat",
  Centos: "centos",
  Ubuntu: "ubuntu",
};

const dir = path.join(process.cwd(), "public", "technologies");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadIcons() {
  console.log("Fetching devicon.json...");
  const deviconRes = await fetch(
    "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json",
  );
  const devicons = await deviconRes.json();

  for (const [displayName, searchName] of Object.entries(techs)) {
    const iconData = devicons.find(
      (d) =>
        d.name === searchName ||
        (d.aliases && d.aliases.some((a) => a.base === searchName)),
    );

    if (iconData) {
      // For some dark logos, try to get a lighter/plain version if available (like django, python, etc)
      let version = "original";
      if (["django", "flask", "mysql", "postgresql"].includes(searchName)) {
        if (iconData.versions.svg.includes("plain")) version = "plain";
      }
      if (!iconData.versions.svg.includes(version)) {
        version = iconData.versions.svg[0];
      }

      const url = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconData.name}/${iconData.name}-${version}.svg`;

      try {
        const res = await fetch(url);
        if (res.ok) {
          const svg = await res.text();
          fs.writeFileSync(path.join(dir, `${searchName}.svg`), svg);
          console.log(`[SUCCESS] Downloaded ${displayName}`);
        } else {
          console.log(
            `[FAILED] Could not download SVG for ${displayName} from ${url}`,
          );
        }
      } catch (e) {
        console.log(`[ERROR] Fetching SVG for ${displayName}: ${e.message}`);
      }
    } else {
      console.log(
        `[NOT FOUND] No match in devicon.json for ${displayName} (${searchName})`,
      );
    }
  }
}

downloadIcons();
