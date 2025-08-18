import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "Kotlin", level: 95 },
    { name: "Jetpack Compose", level: 90 },
    { name: "Clean Architecture", level: 88 },
    { name: "MVVM", level: 92 },
    { name: "Swift", level: 75 },
    { name: "Next.js", level: 70 },
  ]

  const experiences = [
    {
      company: "THECODEBASEIO",
      role: "Android Developer",
      period: "Haziran 2025 - Devam Ediyor",
      description:
        "Topluyoruz App'te reklam ve e-ticaret modülleri üzerinde çalışıyorum. Modüler uygulama mimarisi içinde Kotlin ve Jetpack Compose kullanarak kullanıcı arayüzleri geliştiriyorum.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Hilt", "Flow", "Coroutines"],
    },
    {
      company: "SKYLAND",
      role: "Mobile Developer",
      period: "Haziran 2020 - Mayıs 2024",
      description:
        "Turkish Airlines ve AnadoluJet uygulamalarına uluslararası bilet satış entegrasyonu gerçekleştirdim. 40+ kurumsal Android/iOS uygulamasının bakımını yaptım.",
      technologies: ["Android (Kotlin - Java)", "iOS (Swift)", "Firebase", "SDK Development"],
    },
  ]

  const projects = [
    {
      title: "ABONESEPETI",
      description:
        "Türkiye merkezli abonelik yönetim platformu. Kullanıcıların internet, enerji, TV ve dijital platform aboneliklerini tek yerden karşılaştırıp yönetebilecekleri uygulama.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Firebase", "REST API"],
      period: "2022 - Devam Ediyor",
      type: "Ticari Proje",
    },
    {
      title: "Android MVVM Project",
      description:
        "MVVM mimarisi ile geliştirilmiş modüler e-ticaret Android uygulaması. Ürün listeleme, kategoriler, favoriler ve sepet özelliklerini içeren modern Android geliştirme örneği.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Hilt",
        "Retrofit",
        "Room",
        "Coroutines",
        "Flow",
        "JUnit",
        "MockK",
        "Turbine",
      ],
      period: "2025",
      type: "Kişisel Proje",
    },
    {
      title: "TPOS Demo App",
      description:
        "NFC ve QR kod ile ödeme süreçlerini simüle eden modern Android uygulaması. Clean Architecture ve modüler yapı kullanılarak geliştirildi.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Hilt", "Clean Architecture"],
      period: "2025",
      type: "Demo Proje",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img
                src="/professional-developer-portrait.png"
                alt="Aykut Beyaz"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aykut BEYAZ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">Android Developer</p>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mobil uygulama geliştirme konusunda uzmanlaşmış, yeni teknolojiler ve framework'ler keşfederek becerilerimi
            sürekli geliştiren bir yazılım geliştiricisiyim.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="gap-2">
              <a href="mailto:ayktbyz@gmail.com">
                <Mail className="w-4 h-4" />
                İletişim
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://github.com/ayktbyz" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://linkedin.com/in/aykut-beyaz/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              İstanbul, Turkey
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              538 740 1003
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Yetenekler</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="space-y-2 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Deneyim</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-heading text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-emerald-400">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Projeler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-heading text-white">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs border-emerald-400 text-emerald-400">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-200 hover:bg-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Eğitim</h2>
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-white">Yönetim Bilişim Sistemleri - Lisans</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">
                  Anadolu Üniversitesi • 2017 - 2020
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-white">Bilgisayar Programcılığı - Ön Lisans</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">
                  Nişantaşı Üniversitesi • 2015 - 2017
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">İletişime Geçin</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Yeni projeler ve iş birliği fırsatları için benimle iletişime geçmekten çekinmeyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <a href="mailto:ayktbyz@gmail.com">
                <Mail className="w-5 h-5" />
                E-posta Gönder
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://linkedin.com/in/aykut-beyaz/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn'de Bağlan
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Aykut Beyaz. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
