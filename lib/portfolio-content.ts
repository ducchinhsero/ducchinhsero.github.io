export type Locale = "vi" | "en"
type ProjectId = "infrastructure" | "gitops" | "edge-ai" | "zodanang"

type Content = {
  name: string
  pageTitle: string
  pageDescription: string
  skip: string
  location: string
  about: string
  bio: string
  download: string
  contactAction: string
  status: string
  availability: string
  featured: string
  experience: string
  workRole: string
  workDescription: string
  contact: string
  email: string
  phone: string
  projects: string
  demo: string
  newTab: string
  projectItems: { id: ProjectId; title: string; role: string; description: string; scope?: string }[]
  skills: string
  skillGroups: string[]
  education: string
  university: string
  degree: string
  awards: string
  awardItems: string[]
  languages: string
  vietnamese: string
  native: string
  english: string
  theme: string
  footer: string
}

export const profileTitle = "DevOps & Infrastructure"
export const profileHighlights = ["Linux", "Docker", "CI/CD", "Kubernetes", "Monitoring"]
export const cvPath = "/cv/Dang_Duc_Chinh_DevOps_Engineer_CV_EN.pdf"

export const content: Record<Locale, Content> = {
  vi: {
    name: "Đặng Đức Chính",
    pageTitle: "Đặng Đức Chính | DevOps & Infrastructure",
    pageDescription: "Portfolio DevOps của Đặng Đức Chính tại Đà Nẵng, với các dự án vận hành Linux/Windows, CI/CD, Kubernetes, GitOps, giám sát hệ thống và phát triển ứng dụng.",
    skip: "Đến nội dung chính",
    location: "Đà Nẵng, Việt Nam",
    about: "Giới thiệu",
    bio: "Tôi tốt nghiệp ngành Kỹ thuật máy tính tại Trường Đại học Bách khoa — Đại học Đà Nẵng, có kinh nghiệm thực tập phát triển backend và đang tập trung vào DevOps, quản trị hệ thống và tự động hóa triển khai. Qua các lab cá nhân đã hoàn thành, tôi thực hành vận hành Linux, đóng gói ứng dụng bằng Docker, xây dựng pipeline CI/CD và triển khai Kubernetes với ArgoCD. Tôi quan tâm đến giám sát dịch vụ, phân tích sự cố và kiểm tra khả năng phục hồi hệ thống.",
    download: "Tải CV DevOps (PDF)",
    contactAction: "Liên hệ với tôi",
    status: "Sẵn sàng làm việc",
    availability: "Đang tìm cơ hội làm việc toàn thời gian trong lĩnh vực DevOps và vận hành hệ thống.",
    featured: "Dự án tiêu biểu",
    experience: "Kinh nghiệm liên quan",
    workRole: "Thực tập sinh Backend — Trưởng nhóm",
    workDescription: "Phụ trách phát triển backend cho nền tảng vận chuyển và quản lý đơn hàng, phân công và phối hợp công việc giữa các thành viên. Thiết kế RESTful API, kiến trúc client–server và xây dựng các chức năng hỗ trợ quy trình đặt hàng, giao nhận. Kinh nghiệm này giúp tôi hiểu luồng hoạt động của ứng dụng, từ API đến cơ sở dữ liệu.",
    contact: "Kết nối",
    email: "Email",
    phone: "Điện thoại",
    projects: "Dự án tiêu biểu",
    demo: "Xem website",
    newTab: "mở trong thẻ mới",
    projectItems: [
      {
        id: "infrastructure",
        title: "Lab vận hành hạ tầng Linux và Windows",
        role: "Lab cá nhân · Đã hoàn thành",
        description: "Xây dựng hai máy chủ ứng dụng Linux và một máy chủ vận hành; quản lý dịch vụ bằng systemd. Cấu hình HAProxy, kiểm tra chuyển lưu lượng khi backend ngừng hoạt động; thiết lập Prometheus/Grafana để giám sát tài nguyên, trạng thái HTTP và cảnh báo dịch vụ. Triển khai sao lưu mã hóa bằng restic, kiểm tra dữ liệu phục hồi bằng checksum và thực hành AD DS, DNS, Group Policy, IIS trên Windows Server.",
        scope: "Môi trường máy ảo cá nhân, mô phỏng dự phòng backend và quy trình backup/restore.",
      },
      {
        id: "gitops",
        title: "Triển khai ứng dụng bằng GitLab CI và ArgoCD",
        role: "Lab cá nhân · Đã hoàn thành",
        description: "Đóng gói FastAPI bằng Docker, chạy container không đặc quyền và cung cấp endpoint kiểm tra sức khỏe. Xây dựng pipeline kiểm thử, build và đẩy image lên Registry với tag theo commit SHA. Tách mã nguồn và cấu hình GitOps; dùng ArgoCD đồng bộ Kubernetes, cấu hình probes, hai replica và giới hạn tài nguyên. Thực hành rollback qua Git, xử lý lỗi image, Pod và worker node.",
        scope: "Cluster Kubernetes cục bộ, sử dụng namespace dev/staging để thực hành quy trình triển khai.",
      },
      {
        id: "edge-ai",
        title: "Edge AI theo dõi sức khỏe và nhận diện hành vi",
        role: "Đồ án tốt nghiệp",
        description: "Tích hợp Raspberry Pi 5 và Polar H10 để xử lý dữ liệu ECG, gia tốc và chạy suy luận học máy tại thiết bị biên. Trích xuất hơn 40 đặc trưng HRV bằng SciPy, NeuroKit2; triển khai mô hình phân loại biến cố tim và trạng thái căng thẳng. Dự án bổ sung kinh nghiệm làm việc với thiết bị Linux, môi trường Python và ứng dụng chạy cục bộ.",
      },
      {
        id: "zodanang",
        title: "ZoDaNang",
        role: "Lập trình viên Full Stack",
        description: "Phát triển nền tảng khám phá du lịch với tìm kiếm địa điểm, bộ lọc, bản đồ tương tác, lưu địa điểm và đánh giá cộng đồng. Xây dựng RESTful API, tích hợp MongoDB, Cloudinary và trợ lý du lịch dùng Groq AI. Triển khai frontend trên Vercel và backend trên Render, bổ sung kinh nghiệm đưa ứng dụng web vào môi trường chạy thực tế.",
      },
    ],
    skills: "Kỹ năng chuyên môn",
    skillGroups: ["Linux & Hệ thống", "Containers & CI/CD", "Kubernetes & GitOps", "Giám sát & Phục hồi", "Windows Server — Lab", "Lập trình & Backend"],
    education: "Học vấn",
    university: "Trường Đại học Bách khoa — Đại học Đà Nẵng (DUT)",
    degree: "Kỹ sư ngành Kỹ thuật máy tính",
    awards: "Giải thưởng",
    awardItems: ["Giải Nhì — Cuộc thi Robot SUMO cấp trường", "Giải Ba — Cuộc thi Robot SUMO cấp trường"],
    languages: "Ngôn ngữ",
    vietnamese: "Tiếng Việt",
    native: "Bản ngữ",
    english: "Tiếng Anh",
    theme: "Đổi giao diện sáng/tối",
    footer: "DevOps & Infrastructure · Đà Nẵng, Việt Nam",
  },
  en: {
    name: "Dang Duc Chinh",
    pageTitle: "Dang Duc Chinh | DevOps & Infrastructure",
    pageDescription: "DevOps portfolio of Dang Duc Chinh in Da Nang, Vietnam, featuring Linux/Windows operations, CI/CD, Kubernetes, GitOps, monitoring, and application development projects.",
    skip: "Skip to main content",
    location: "Da Nang, Vietnam",
    about: "About me",
    bio: "I am a Computer Engineering graduate from the University of Danang — University of Science and Technology, with backend development internship experience and a focus on DevOps, system administration, and deployment automation. Through completed personal labs, I have practiced Linux operations, Docker containerization, CI/CD pipelines, and Kubernetes deployments with ArgoCD. My interests include service monitoring, troubleshooting, and verifying system recovery.",
    download: "Download DevOps CV (PDF)",
    contactAction: "Get in touch",
    status: "Open to opportunities",
    availability: "Seeking a full-time opportunity in DevOps and system operations.",
    featured: "Featured projects",
    experience: "Related experience",
    workRole: "Backend Developer Intern — Team Lead",
    workDescription: "Led backend development for a delivery and order-management platform, assigned tasks, and coordinated work across team members. Designed RESTful APIs and client–server architecture, and developed features for order placement and delivery workflows. This experience gave me an understanding of application flows, from APIs to databases.",
    contact: "Connect",
    email: "Email",
    phone: "Phone",
    projects: "Selected projects",
    demo: "Visit website",
    newTab: "opens in a new tab",
    projectItems: [
      {
        id: "infrastructure",
        title: "Linux and Windows Infrastructure Operations Lab",
        role: "Personal lab · Completed",
        description: "Built two Linux application servers and an operations server, managing services with systemd. Configured HAProxy and tested traffic failover during backend outages. Set up Prometheus/Grafana for resource monitoring, HTTP status checks, and service alerts. Implemented encrypted restic backups, verified restores using checksums, and practiced AD DS, DNS, Group Policy, and IIS on Windows Server.",
        scope: "A personal virtual-machine lab for backend redundancy and backup/restore exercises.",
      },
      {
        id: "gitops",
        title: "Application Delivery with GitLab CI and ArgoCD",
        role: "Personal lab · Completed",
        description: "Containerized FastAPI with Docker, ran non-root containers, and provided a health endpoint. Built pipelines for testing, image builds, and Registry publishing with commit SHA tags. Separated application code from GitOps configuration and used ArgoCD to synchronize Kubernetes deployments with probes, two replicas, and resource limits. Practiced Git-based rollback and recovery from image, Pod, and worker-node failures.",
        scope: "A local Kubernetes cluster with dev/staging namespaces for deployment exercises.",
      },
      {
        id: "edge-ai",
        title: "Edge AI Health Monitoring & Behavior Recognition",
        role: "Graduation thesis",
        description: "Integrated Raspberry Pi 5 and Polar H10 to process ECG and accelerometer data and run machine-learning inference at the edge. Extracted 40+ HRV features using SciPy and NeuroKit2 and implemented cardiac-event and stress classification models. The project provided experience with Linux-based devices, Python environments, and locally deployed applications.",
      },
      {
        id: "zodanang",
        title: "ZoDaNang",
        role: "Full Stack Developer",
        description: "Developed a travel discovery platform with location search, filters, interactive maps, saved places, and community reviews. Built RESTful APIs and integrated MongoDB, Cloudinary, and a Groq AI travel assistant. Deployed the frontend on Vercel and the backend on Render, gaining experience delivering a web application to a live environment.",
      },
    ],
    skills: "Technical skills",
    skillGroups: ["Linux & Systems", "Containers & CI/CD", "Kubernetes & GitOps", "Monitoring & Recovery", "Windows Server — Lab", "Programming & Backend"],
    education: "Education",
    university: "The University of Danang – University of Science and Technology (DUT)",
    degree: "Bachelor of Engineering in Computer Engineering",
    awards: "Honors & awards",
    awardItems: ["Second Prize — University SUMO Robot Competition", "Third Prize — University SUMO Robot Competition"],
    languages: "Languages",
    vietnamese: "Vietnamese",
    native: "Native",
    english: "English",
    theme: "Toggle light/dark theme",
    footer: "DevOps & Infrastructure · Da Nang, Vietnam",
  },
}

export const projectDetails: Record<ProjectId, { technologies: string[]; href?: string }> = {
  infrastructure: { technologies: ["Linux", "Windows Server", "systemd", "HAProxy", "Prometheus", "Grafana", "restic"] },
  gitops: { technologies: ["FastAPI", "Docker", "GitLab CI/CD", "Container Registry", "Kubernetes", "ArgoCD"] },
  "edge-ai": { technologies: ["Python", "Raspberry Pi 5", "Polar H10", "Scikit-learn", "SciPy", "NeuroKit2"] },
  zodanang: { technologies: ["React", "TypeScript", "Express", "MongoDB", "Groq AI", "Cloudinary", "Vercel", "Render"], href: "https://zodanang.online" },
}

export const skillTechnologies = [
  ["Linux", "SSH", "systemd", "Permissions", "Logs"],
  ["Docker", "Git", "GitHub", "GitLab CI/CD", "Container Registry"],
  ["Deployment", "Service", "ConfigMap", "Secret", "Health probes", "ArgoCD"],
  ["Prometheus", "Grafana", "HAProxy", "restic", "Backup/Restore"],
  ["AD DS", "DNS", "Group Policy", "IIS"],
  ["Python", "TypeScript/JavaScript", "FastAPI", "Express", "RESTful APIs", "MongoDB", "MySQL"],
]
