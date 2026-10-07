/* ==========================================================================
   DASH SOLUTIONS - CMS & INTERACTIVE JAVASCRIPT
   Gerenciamento Completo do Site, Autenticação Admin, CRUD de Portfólio,
   Métricas de Autoridade e Seção Sobre Nós Editável
   ========================================================================== */

// Configuração Padrão Completa dos Textos e Seções do Site
const defaultSiteContent = {
  // Tema & Paleta de Cores Oficial (Totalmente Customizável)
  theme: {
    preset: "default",
    primaryColor: "#B9915B",
    secondaryColor: "#C9A96E",
    darkAccent: "#977342",
    bgMain: "#001F35",
    bgDeep: "#01121E",
    bgSurface: "#06263F"
  },

  // Identidade da Marca & Logotipo (Totalmente Customizável)
  brand: {
    logoType: "monogram", // "monogram" | "image"
    monogramText: "DS",
    logoImageUrl: "",
    logoImageHeight: 40,
    showName: true,
    nameFirst: "DASH",
    nameSecond: "SOLUTIONS",
    showTagline: true,
    tagline: "ENTERPRISE TECHNOLOGY",
    footerDesc: "Reunindo engenharia rigorosa, governança e tecnologia de vanguarda para orientar empresas reais que buscam escala sem vulnerabilidades."
  },

  announcementBadge: "EXCLUSIVO",
  announcementText: "Excelência em Infraestrutura e Transformação Digital Corporativa |",
  announcementLinkText: "Agende um diagnóstico técnico gratuito",
  heroTag: "Tecnologia de Alta Performance & Governança",
  heroTitle: "Para quem busca <br><span class=\"serif-italic\">robustez, método</span> e escala contínua.",
  heroSubtitle: "Unimos engenharia de software de ponta, inteligência artificial aplicada, sustentação de infraestrutura crítica e cibersegurança em um único ecossistema corporativo.",

  // 4 Métricas de Autoridade (Editáveis)
  metrics: [
    {
      val: "+99.9%",
      label: "Uptime Garantido",
      desc: "SLA rigoroso com monitoramento proativo"
    },
    {
      val: "100%",
      label: "Gestão Sob Medida",
      desc: "Projetos alinhados com metas de faturamento"
    },
    {
      val: "+10 anos",
      label: "Experiência Corporativa",
      desc: "Liderando infraestrutura em alta complexidade"
    },
    {
      val: "24/7",
      label: "Sustentação Crítica",
      desc: "Engenheiros prontos para qualquer incidente"
    }
  ],

  // Seção Sobre Nós Completa (Editável)
  about: {
    tag: "SOBRE NÓS",
    title: "Tecnologia com visão de negócios e <span class=\"serif-italic\">mentalidade de dono.</span>",
    quote: "Não acreditamos em tecnologia pela tecnologia. Acreditamos em sistemas que operam sem falhas, processos que eliminam desperdícios e segurança que protege o futuro da empresa.",
    desc: "Nascemos com o propósito de transformar a TI corporativa de um centro de custos reativo em um motor de aceleração e governança para empresas ambiciosas. Unimos expertise em arquitetura de dados e nuvem com a agilidade de desenvolvimento moderno.",
    pillar1Num: "01",
    pillar1Title: "Governança e Método Rigoroso",
    pillar1Desc: "Processos baseados em ITIL 4, frameworks ágeis e padrões internacionais de documentação para que a sua empresa nunca fique refém de indivíduos.",
    pillar2Num: "02",
    pillar2Title: "Segurança por Design (Zero-Trust)",
    pillar2Desc: "Nenhuma conexão ou usuário é confiado cegamente. Blindagem perimetral, backups imutáveis e resposta imediata a vulnerabilidades.",
    pillar3Num: "03",
    pillar3Title: "Inovação Pragmática com IA",
    pillar3Desc: "Implementamos Inteligência Artificial onde ela gera economia palpável e ganho real de velocidade, sem modismos passageiros.",
    ecosystemTitle: "Ecossistema Tecnológico Homologado",
    ecosystemSubtitle: "Trabalhamos exclusivamente com as tecnologias líderes e mais seguras do mundo:",
    technologies: [
      "Amazon Web Services", "Microsoft Azure", "Google Cloud",
      "Cisco Networking", "Fortinet NGFW", "Veeam Backup",
      "Atlassian Jira", "Kubernetes & Docker", "Zabbix & Grafana",
      "Python & Node.js", "OpenAI / Claude LLMs", "VMware ESXi"
    ],
    certifications: [
      "✓ ISO/IEC 27001 Aligned",
      "✓ ITIL 4 Certified",
      "✓ LGPD Compliant"
    ]
  },

  // Seção Metodologia / Nosso Framework (Editável)
  framework: {
    tag: "NOSSO FRAMEWORK",
    title: "Como Entregamos Resultados de <span class=\"serif-italic\">Ponta a Ponta</span>",
    subtitle: "Uma esteira disciplinada que garante previsibilidade, clareza e ausência de surpresas no orçamento.",
    steps: [
      {
        num: "01",
        title: "Diagnóstico & Assessment",
        desc: "Varredura profunda do parque atual, identificando vulnerabilidades, gargalos de rede e oportunidades imediatas de otimização."
      },
      {
        num: "02",
        title: "Arquitetura & Desenho",
        desc: "Elaboração da topologia ideal, definição de métricas de SLA, estimativa de custos em nuvem e planejamento de janelas sem downtime."
      },
      {
        num: "03",
        title: "Implantação & Hardening",
        desc: "Execução técnica com testes de estresse, configuração de segurança, parametrização de ferramentas e capacitação das equipes."
      },
      {
        num: "04",
        title: "Sustentação & Evolução 24/7",
        desc: "Monitoramento contínuo em tempo real, patches preventivos, relatórios executivos mensais e suporte de engenharia sênior."
      }
    ]
  },

  // Carrossel de Imagens do Banner Principal (Editável e com Upload)
  heroCarousel: [
    {
      id: "slide-1",
      image: "assets/images/slide1-datacenter.jpg",
      badge: "INFRAESTRUTURA & NUVEM",
      title: "Centro de Operações NOC/SOC de Alta Performance",
      subtitle: "Monitoramento contínuo em tempo real de servidores virtuais, switches corporativos e rotinas automatizadas de backup."
    },
    {
      id: "slide-2",
      image: "assets/images/slide2-software-ai.jpg",
      badge: "SOFTWARE & IA",
      title: "Engenharia de Software Sob Medida & Modelos de IA",
      subtitle: "Aplicações de missão crítica e inteligência artificial generativa integradas à arquitetura do seu negócio."
    },
    {
      id: "slide-3",
      image: "assets/images/slide3-cybersecurity.jpg",
      badge: "CIBERSEGURANÇA & CONTINUIDADE",
      title: "Firewalls de Próxima Geração & Defesa Zero-Trust",
      subtitle: "Proteção perimetral avançada, conformidade rigorosa com a LGPD e resposta imediata a incidentes."
    }
  ],

  companyAddress: "Av. Engenheiro Luís Carlos Berrini, 105 - São Paulo, SP",
  companyEmail: "contato@dashsolutions.com.br",
  companyPhone: "+55 (11) 99999-9999"
};

// Base de Dados Original dos 13 Itens de Portfólio
const defaultPortfolioServices = [
  {
    id: "software-personalizado",
    category: "software-ia",
    categoryLabel: "Software & IA",
    title: "Desenvolvimento de Software Personalizado",
    shortDesc: "Sistemas web e mobile de alta complexidade desenvolvidos sob medida para as regras do seu negócio, garantindo escalabilidade, código limpo e alta performance.",
    longDesc: "Desenvolvemos plataformas corporativas sob medida utilizando as melhores práticas de engenharia de software do mercado. Desde arquitetura orientada a microsserviços até interfaces ultra responsivas, construímos ativos proprietários para empresas que não aceitam limitações de soluções de prateleira.",
    keyFeatures: [
      "Arquitetura moderna de microsserviços e APIs",
      "Engenharia orientada a domínio (DDD) e Clean Code",
      "Pipeline CI/CD automatizado com testes unitários"
    ],
    deliverables: [
      "Levantamento técnico e desenho de arquitetura de software",
      "Desenvolvimento ágil (Sprints quinzenais com entregas contínuas)",
      "Testes automatizados de carga, estresse e segurança",
      "Documentação técnica completa e transferência de know-how",
      "Garantia pós-entrega e SLA de sustentação dedicado"
    ],
    technologies: ["Node.js", "Python", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    id: "implementacao-ia",
    category: "software-ia",
    categoryLabel: "Software & IA",
    title: "Implementação de IA",
    shortDesc: "Integração de Inteligência Artificial generativa, Large Language Models (LLMs) corporativos e agentes autônomos para automatizar decisões e análises complexas.",
    longDesc: "Transformamos o potencial da Inteligência Artificial em vantagem competitiva prática. Implementamos sistemas RAG (Retrieval-Augmented Generation) privados para que seus dados internos alimentem respostas assertivas, assistentes executivos e automações cognitivas sem vazamento de informações sensíveis.",
    keyFeatures: [
      "Modelos RAG seguros conectados a bases corporativas",
      "Agentes autônomos para análise de documentos e relatórios",
      "Governança, privacidade e compliance com LGPD"
    ],
    deliverables: [
      "Assessment de casos de uso com maior ROI operacional",
      "Fine-tuning ou orquestração de LLMs (OpenAI, Claude, Gemini, Llama)",
      "Integração via APIs seguras com os sistemas legados",
      "Treinamento de prompts e esteiras de validação humana",
      "Dashboard de consumo de tokens e mensuração de impacto"
    ],
    technologies: ["LangChain", "OpenAI API", "Anthropic Claude", "Llama 3", "Pinecone", "ChromaDB", "Python", "FastAPI"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
  },
  {
    id: "itsm",
    category: "governanca",
    categoryLabel: "Governança & Gestão",
    title: "Implantação de Sistemas de ITSM",
    shortDesc: "Estruturação completa de Gestão de Serviços de TI alinhada ao framework ITIL 4, reduzindo tempo de resolução e profissionalizando o atendimento ao usuário.",
    longDesc: "Diga adeus a solicitações perdidas em e-mails e mensagens informais. Implementamos centrais de serviços de TI (Service Desk) robustas, com catálogo de serviços, gestão de incidentes, problemas e mudanças, métricas de SLA e automações inteligentes.",
    keyFeatures: [
      "Catálogo de serviços e portal intuitivo de autoatendimento",
      "Controle de SLAs contratuais e fluxos de aprovação",
      "Gestão de incidentes, mudanças (RFCs) e base de conhecimento"
    ],
    deliverables: [
      "Diagnóstico do fluxo operacional atual e maturidade ITIL",
      "Parametrização completa da plataforma ITSM escolhida",
      "Criação de esteiras de atendimento (N1, N2 e N3)",
      "Treinamento operacional para equipes técnicas e usuários",
      "Relatórios executivos e dashboards de satisfação (CSAT)"
    ],
    technologies: ["Jira Service Management", "GLPI", "Zendesk Support", "Freshservice", "ITIL 4", "ServiceNow"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><circle cx="4" cy="12" r="2"></circle><circle cx="12" cy="10" r="2"></circle><circle cx="20" cy="14" r="2"></circle></svg>`
  },
  {
    id: "gestao-projetos",
    category: "governanca",
    categoryLabel: "Governança & Gestão",
    title: "Implantação de Gestão de Tarefas e Projetos",
    shortDesc: "Organização do fluxo de trabalho das equipes com metodologias ágeis (Scrum, Kanban, OKRs) e implantação das plataformas líderes de mercado.",
    longDesc: "Acelere a cadência de entrega da sua organização com alinhamento estratégico e transparência total de ponta a ponta. Estruturamos quadros de tarefas, rituais ágeis, fluxos de validação e relatórios de capacidade de time que eliminam gargalos operacionais.",
    keyFeatures: [
      "Quadros Kanban e Sprints ágeis customizados por setor",
      "Gestão de capacidade produtiva, prazos e prioridades",
      "Painéis gerenciais integrados com metas e OKRs da empresa"
    ],
    deliverables: [
      "Mapeamento de processos e fluxos de valor de cada departamento",
      "Configuração e automação do software (Jira, ClickUp, Asana)",
      "Workshops de boas práticas ágeis para líderes e colaboradores",
      "Integração com ferramentas de comunicação (Slack/Teams)",
      "Acompanhamento dos primeiros ciclos de entrega para calibragem"
    ],
    technologies: ["Jira Software", "ClickUp", "Asana", "Monday.com", "Notion Enterprise", "Metodologia Ágil (Scrum/Kanban)"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><path d="M14 8h4"></path><path d="M14 12h4"></path><path d="M14 16h4"></path></svg>`
  },
  {
    id: "gerenciamento-vms",
    category: "infra-nuvem",
    categoryLabel: "Infraestrutura & Nuvem",
    title: "Gerenciamento de VMs (Servidores Virtuais)",
    shortDesc: "Orquestração, dimensionamento correto (right-sizing), alta disponibilidade e monitoramento constante de instâncias virtuais em data centers ou nuvem.",
    longDesc: "Administramos seu parque de máquinas virtuais garantindo desempenho máximo com o menor custo de computação possível. Realizamos ajustes de memória, CPU, IOPS de disco, snapshots consistentes e balanceamento de carga para evitar qualquer degradação em momentos de pico.",
    keyFeatures: [
      "Right-sizing inteligente para eliminação de custos ociosos",
      "Clusterização com failover automático e balanceamento",
      "Gerenciamento de recursos (vCPU, RAM, Storage NVMe)"
    ],
    deliverables: [
      "Auditoria de capacidade e saúde das máquinas virtuais atuais",
      "Padronização de imagens base (Golden Images) blindadas",
      "Automação de rotinas de snapshot e retenção preventiva",
      "Isolamento de redes virtuais (vSwitches e VPCs)",
      "Suporte e sustentação de segundo e terceiro nível 24/7"
    ],
    technologies: ["VMware vSphere / ESXi", "Proxmox VE", "Hyper-V", "AWS EC2", "Azure Virtual Machines", "KVM"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
  },
  {
    id: "seguranca-informacao",
    category: "seguranca",
    categoryLabel: "Segurança & Continuidade",
    title: "Segurança da Informação",
    shortDesc: "Blindagem corporativa ponta a ponta com estratégia Zero-Trust, adequação a normas (LGPD / ISO 27001), pentests e gestão de riscos cibernéticos.",
    longDesc: "A segurança da informação não pode ser um obstáculo ao negócio, mas sim um alicerce de confiança. Implementamos políticas estruturadas de controle de acesso, gestão de privilégios mínimos (PAM), proteção de endpoints (EDR/XDR) e planos de resposta a incidentes para salvaguardar os dados críticos da sua empresa.",
    keyFeatures: [
      "Arquitetura Zero-Trust e controle rigoroso de acessos (IAM/PAM)",
      "Proteção de estações e servidores com EDR/XDR avançado",
      "Auditoria de vulnerabilidades e testes de intrusão (Pentests)"
    ],
    deliverables: [
      "Diagnóstico de Maturidade em Cibersegurança (Security Score)",
      "Política de Segurança da Informação (PSI) e diretrizes LGPD",
      "Configuração de autenticação multifator obrigatória (MFA)",
      "Treinamentos de conscientização contra Phishing e engenharia social",
      "Plano de Resposta a Incidentes e Comitê de Crise"
    ],
    technologies: ["Zero Trust", "EDR / XDR", "Microsoft Defender for Endpoint", "Bitdefender GravityZone", "CrowdStrike", "SIEM / SOC"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>`
  },
  {
    id: "monitoramento",
    category: "infra-nuvem",
    categoryLabel: "Infraestrutura & Nuvem",
    title: "Monitoramento e Observabilidade",
    shortDesc: "Visibilidade em tempo real de toda a infraestrutura física, em nuvem, bancos de dados e aplicações, com alertas preditivos antes de qualquer parada.",
    longDesc: "Transformamos dados operacionais dispersos em um centro de comando inteligente. Coletamos métricas de latência, uso de disco, memória, transações por segundo e saúde de links com dashboards gerenciais elegantes e alertas automáticos via WhatsApp, Slack, Teams ou Telegram.",
    keyFeatures: [
      "Observabilidade completa (Métricas, Logs e Traces)",
      "Alertas proativos multicanal em tempo real",
      "Dashboards executivos com status de SLA e saúde do negócio"
    ],
    deliverables: [
      "Instalação e tuning de agentes de monitoramento em todo o parque",
      "Configuração de thresholds críticos e triggers preditivas",
      "Criação de painéis no Grafana com visão técnica e gerencial",
      "Integração de canais de escalonamento para plantão técnico",
      "Relatórios periódicos de tendências e capacidade (Capacity Planning)"
    ],
    technologies: ["Zabbix", "Grafana", "Prometheus", "Datadog", "Uptime Kuma", "Telegram / Slack Webhooks"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
  },
  {
    id: "configuracao-switches",
    category: "infra-nuvem",
    categoryLabel: "Infraestrutura & Nuvem",
    title: "Configuração de Switches e Redes",
    shortDesc: "Engenharia de rede de alto desempenho, segmentação com VLANs, alta disponibilidade via LACP/STP e controle de qualidade de serviço (QoS).",
    longDesc: "A espinha dorsal física de qualquer escritório ou data center exige organização técnica impecável. Configuramos switches gerenciáveis de camada L2/L3 com segmentação rigorosa de tráfego (dados, voz sobre IP, CFTV, visitantes e servidores) para impedir congestionamentos e vazamentos de pacotes.",
    keyFeatures: [
      "Segmentação segura via VLANs e roteamento entre redes",
      "Prevenção de loops com Spanning Tree Protocol (STP/RSTP)",
      "Agregação de links (LACP) para dobrar banda e redundância"
    ],
    deliverables: [
      "Mapeamento da topologia física e lógica existente",
      "Configuração de portas, trunks, VLANs e QoS prioritário",
      "Implementação de segurança nas portas (Port Security e 802.1X)",
      "Atualização de firmwares e rotinas de backup das configurações",
      "Documentação visual e diagrama de rede em alta resolução"
    ],
    technologies: ["Cisco Catalyst / Meraki", "Aruba Networks", "Ubiquiti UniFi", "MikroTik", "Dell Networking", "VLANs / LACP"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="6" cy="12" r="1.5"></circle><circle cx="10" cy="12" r="1.5"></circle><circle cx="14" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>`
  },
  {
    id: "nuvem",
    category: "infra-nuvem",
    categoryLabel: "Infraestrutura & Nuvem",
    title: "Arquitetura e Migração em Nuvem",
    shortDesc: "Consultoria estratégica em Cloud Computing (AWS, Azure, GCP), desenho de ambientes híbridos, modernização de cargas e otimização de custos (FinOps).",
    longDesc: "Planejamos e executamos a jornada para a nuvem da sua empresa com risco zero de interrupção operacional. Desenhamos ambientes tolerantes a falhas, escaláveis automaticamente e auditados financeiramente para garantir que você pague apenas pelo que realmente consome.",
    keyFeatures: [
      "Migração sem downtime planejado (Lift & Shift ou Re-architecture)",
      "Práticas de FinOps para redução de fatura em até 40%",
      "Infraestrutura como Código (Terraform) e ambientes imutáveis"
    ],
    deliverables: [
      "Cloud Assessment e TCO (Total Cost of Ownership)",
      "Desenho de arquitetura Well-Architected Framework",
      "Provisionamento automatizado de redes (VPC, Subnets, VPN Site-to-Site)",
      "Configuração de políticas de escalonamento automático (Auto-scaling)",
      "Revisão mensal de custos com recomendações de reservas e savings plans"
    ],
    technologies: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Terraform", "Cloudflare", "Kubernetes"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
  },
  {
    id: "firewall",
    category: "seguranca",
    categoryLabel: "Segurança & Continuidade",
    title: "Implantação e Gestão de Firewall",
    shortDesc: "Proteção de borda com Firewalls de Próxima Geração (NGFW), inspeção profunda de pacotes (DPI), VPNs corporativas ultrasseguras e filtro de conteúdo.",
    longDesc: "Bloqueie invasões, acessos indevidos e tráfego malicioso antes que atinjam sua rede interna. Configuramos appliances e firewalls de alta densidade com regras cirúrgicas de entrada/saída, prevenção contra intrusão (IPS/IDS) e túneis VPN criptografados para trabalho remoto sem riscos.",
    keyFeatures: [
      "Next-Generation Firewall (NGFW) com inspeção profunda SSL/TLS",
      "VPN IPsec e SSL com autenticação multifator para colaboradores",
      "Controle de aplicações, bloqueio de ameaças e filtro web por categorias"
    ],
    deliverables: [
      "Dimensionamento e escolha de hardware ou appliance virtual ideal",
      "Migração ou elaboração da matriz de regras de segurança de firewall",
      "Configuração de túneis VPN corporativos matriz-filial e home office",
      "Ativação de feeds de inteligência de ameaças em tempo real",
      "Rotinas de backup criptografado das regras e relatórios de bloqueio"
    ],
    technologies: ["Fortinet FortiGate", "pfSense", "OPNsense", "SonicWall", "Palo Alto Networks", "WireGuard / OpenVPN"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
  },
  {
    id: "rotinas-backup",
    category: "seguranca",
    categoryLabel: "Segurança & Continuidade",
    title: "Rotinas de Backup e Disaster Recovery",
    shortDesc: "Estratégia de backup 3-2-1 à prova de Ransomware com cópias imutáveis, replicação em nuvem e testes periódicos de restauração (RTO e RPO).",
    longDesc: "Dados que não podem ser restaurados rapidamente não são dados protegidos. Estruturamos políticas formais de backup garantindo cópias locais de alta velocidade somadas a réplicas externas em armazenamento em nuvem imutável (Object Lock), impedindo que sequestros de dados destruam o negócio.",
    keyFeatures: [
      "Metodologia 3-2-1 com imutabilidade real contra ataques de ransomware",
      "RTO (Tempo de Recuperação) e RPO (Ponto de Recuperação) calculados",
      "Testes periódicos simulados de desastre com validação de dados"
    ],
    deliverables: [
      "Mapeamento de ativos críticos e definição de janelas de backup",
      "Configuração de servidores e agentes de backup corporativo",
      "Provisionamento de storage local e bucket seguro em nuvem",
      "Homologação de relatórios diários de sucesso com alertas de falhas",
      "Simulação semestral de Disaster Recovery com emissão de laudo técnico"
    ],
    technologies: ["Veeam Backup & Replication", "Bacula Enterprise", "AWS S3 Glacier", "Wasabi Cloud", "Proxmox Backup Server", "Acronis"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
  },
  {
    id: "manutencao-servidores",
    category: "infra-nuvem",
    categoryLabel: "Infraestrutura & Nuvem",
    title: "Manutenção de Sistemas e Servidores",
    shortDesc: "Sustentação técnica contínua preventiva e corretiva para ambientes Linux e Windows Server, gestão de patches, saúde de hardware e suporte especializado.",
    longDesc: "Mantenha seus servidores operando na capacidade máxima sem surpresas de lentidão ou telas azuis. Nossa equipe cuida de toda a rotina de atualizações de segurança (patching), expurgo de logs temporários, otimização de bancos de dados locais e saúde dos discos e controladoras RAID.",
    keyFeatures: [
      "Gestão automatizada de atualizações e patches de segurança do SO",
      "Diagnóstico e manutenção de arranjos de disco (RAID) e hardware",
      "Sustentação especializada para sistemas Windows Server e Linux"
    ],
    deliverables: [
      "Auditoria inicial de integridade do sistema operacional e serviços",
      "Criação de janelas controladas de manutenção sem impacto aos usuários",
      "Hardening de portas e serviços não utilizados do sistema",
      "Controle de logs de eventos e diagnóstico proativo de erros no kernel",
      "Atendimento prioritário para emergências e suporte de terceiro nível"
    ],
    technologies: ["Windows Server (AD / DNS / File Server)", "Linux (Ubuntu / Debian / RHEL)", "RAID Management", "WSUS", "Ansible"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  },
  {
    id: "automatizacao-fluxos",
    category: "software-ia",
    categoryLabel: "Software & IA",
    title: "Automatização de Fluxos e Processos (RPA)",
    shortDesc: "Eliminação radical de retrabalho manual integrando ERPs, CRMs, planilhas e canais de atendimento por meio de fluxos automáticos e robôs de software.",
    longDesc: "Conecte os sistemas que sua empresa já utiliza e liberte seu time de copiar e colar informações. Construímos automações corporativas integrando bancos de dados, emissão de pedidos, conciliação financeira, onboarding de clientes e notificações automáticas via webhooks e APIs.",
    keyFeatures: [
      "Integração profunda entre ERPs, CRMs e ferramentas de comunicação",
      "Redução drástica de erros humanos e tempo de ciclo de processos",
      "Robôs de automação (RPA) operando 24 horas por dia"
    ],
    deliverables: [
      "Mapeamento das tarefas repetitivas com maior consumo de horas",
      "Desenho dos diagramas de fluxo de dados e regras de negócio",
      "Construção das automações e conectores em ambiente seguro",
      "Tratamento avançado de erros com alertas imediatos de exceções",
      "Dashboard de horas economizadas e eficiência do pipeline"
    ],
    technologies: ["n8n Enterprise", "Make (Integromat)", "Python Scripts", "Zapier", "REST APIs / Webhooks", "Power Automate"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  }
];

// Carregamento de Estado do LocalStorage (Persistência)
function loadStoredPortfolio() {
  const saved = localStorage.getItem('dash_portfolio_services');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Erro ao carregar portfólio salvo:", e);
    }
  }
  return [...defaultPortfolioServices];
}

function loadStoredSiteContent() {
  const saved = localStorage.getItem('dash_site_content');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...defaultSiteContent,
        ...parsed,
        theme: parsed.theme ? { ...defaultSiteContent.theme, ...parsed.theme } : { ...defaultSiteContent.theme },
        brand: parsed.brand ? { ...defaultSiteContent.brand, ...parsed.brand } : { ...defaultSiteContent.brand },
        metrics: parsed.metrics && parsed.metrics.length ? parsed.metrics : [...defaultSiteContent.metrics],
        about: parsed.about ? { ...defaultSiteContent.about, ...parsed.about } : { ...defaultSiteContent.about },
        framework: parsed.framework ? { ...defaultSiteContent.framework, ...parsed.framework } : { ...defaultSiteContent.framework },
        heroCarousel: parsed.heroCarousel && parsed.heroCarousel.length ? parsed.heroCarousel : [...defaultSiteContent.heroCarousel]
      };
    } catch (e) {
      console.error("Erro ao carregar conteúdo do site:", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultSiteContent));
}

let portfolioServices = loadStoredPortfolio();
let siteContent = loadStoredSiteContent();

// Inicialização Principal
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getActiveTheme());
  renderThemePresets();
  updateDrawerThemeStatus(getActiveTheme());
  renderBrandLogo();
  renderStatsSection();
  renderAboutSection();
  renderFrameworkSection();
  renderHeroCarousel();
  applyGeneralTextsToDOM();
  initNavbarScroll();
  initMobileMenu();
  renderPortfolioCards();
  initPortfolioFilters();
  initPortfolioSearch();
  initModalEvents();
  initContactForm();
  populateContactServiceCheckboxes();
  initAdminSystem();
  syncThemeFromServer();
});

/* ==========================================================================
   IDENTIDADE VISUAL DA MARCA & LOGOTIPO DO CLIENTE (CUSTOMIZÁVEL)
   ========================================================================== */
function getActiveBrand() {
  return siteContent.brand || defaultSiteContent.brand;
}

function buildBrandLogoHTML(brand, options = {}) {
  let logoGraphic = '';

  if (brand.logoType === 'image' && brand.logoImageUrl) {
    const height = Math.min(Math.max(brand.logoImageHeight || 40, 24), 70);
    logoGraphic = `
      <img src="${escapeHtml(brand.logoImageUrl)}" alt="${escapeHtml(brand.nameFirst || '')} ${escapeHtml(brand.nameSecond || '')}" class="brand-logo-img" style="max-height:${height}px;">
    `;
  } else {
    const symbolText = (brand.monogramText || 'DS').toUpperCase();
    logoGraphic = `
      <div class="logo-symbol">${escapeHtml(symbolText)}</div>
    `;
  }

  let textMarkup = '';
  if (brand.showName !== false) {
    const first = escapeHtml(brand.nameFirst !== undefined ? brand.nameFirst : 'DASH');
    const second = escapeHtml(brand.nameSecond !== undefined ? brand.nameSecond : 'SOLUTIONS');
    const titleHtml = `<span class="title">${first} <span>${second}</span></span>`;
    const subtitleHtml = (brand.showTagline !== false && brand.tagline) 
      ? `<span class="subtitle">${escapeHtml(brand.tagline)}</span>` 
      : '';
    textMarkup = `
      <div class="logo-text">
        ${titleHtml}
        ${subtitleHtml}
      </div>
    `;
  }

  return `${logoGraphic}${textMarkup}`;
}

function renderBrandLogo() {
  const brand = getActiveBrand();

  // 1. Header Logo
  const headerLogo = document.getElementById('header-brand-logo');
  if (headerLogo) {
    headerLogo.innerHTML = buildBrandLogoHTML(brand, { isHeader: true });
  }

  // 2. Footer Logo
  const footerLogo = document.getElementById('footer-brand-logo');
  if (footerLogo) {
    footerLogo.innerHTML = buildBrandLogoHTML(brand, { isFooter: true });
  }

  // 3. Footer Brand Desc
  const footerDesc = document.getElementById('footer-brand-desc');
  if (footerDesc && brand.footerDesc) {
    footerDesc.textContent = brand.footerDesc;
  }

  // 4. Footer Copyright Brand
  const footerCopy = document.getElementById('footer-copyright-brand');
  if (footerCopy) {
    const fullName = `${brand.nameFirst || ''} ${brand.nameSecond || ''}`.trim() || 'Dash Solutions';
    footerCopy.textContent = fullName;
  }

  // 5. Drawer Header
  const drawerSymbol = document.getElementById('drawer-logo-symbol');
  const drawerName = document.getElementById('drawer-brand-name');
  if (drawerSymbol) {
    if (brand.logoType === 'image' && brand.logoImageUrl) {
      drawerSymbol.outerHTML = `<img src="${escapeHtml(brand.logoImageUrl)}" id="drawer-logo-symbol" alt="${escapeHtml(brand.nameFirst || 'Logo')}" style="max-height:36px; max-width:64px; object-fit:contain; border-radius:6px;">`;
    } else {
      drawerSymbol.outerHTML = `<div class="logo-symbol" id="drawer-logo-symbol" style="width:36px; height:36px; font-size:1rem;">${escapeHtml(brand.monogramText || 'DS')}</div>`;
    }
  }
  if (drawerName) {
    const fullName = `${brand.nameFirst || ''} ${brand.nameSecond || ''}`.trim() || 'Dash Solutions';
    drawerName.textContent = `Painel de Gestão ${fullName}`;
  }

  // 6. Atualiza document.title
  const brandFullName = `${brand.nameFirst || ''} ${brand.nameSecond || ''}`.trim() || 'Dash Solutions';
  document.title = `${brandFullName} | ${brand.tagline || 'Enterprise Technology'}`;
}

let currentEditingBrandType = 'monogram';

window.openBrandEditorModal = function() {
  closeAdminDrawer();
  populateBrandInputs();
  updateBrandLivePreview();
  const modal = document.getElementById('brand-editor-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeBrandEditorModal = function() {
  const modal = document.getElementById('brand-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

window.setBrandType = function(type) {
  currentEditingBrandType = type;
  const btnMono = document.getElementById('btn-type-monogram');
  const btnImg = document.getElementById('btn-type-image');
  const monoContainer = document.getElementById('brand-monogram-container');
  const imgContainer = document.getElementById('brand-image-container');

  if (type === 'image') {
    btnMono?.classList.remove('active');
    btnImg?.classList.add('active');
    if (monoContainer) monoContainer.style.display = 'none';
    if (imgContainer) imgContainer.style.display = 'block';
  } else {
    btnMono?.classList.add('active');
    btnImg?.classList.remove('active');
    if (monoContainer) monoContainer.style.display = 'block';
    if (imgContainer) imgContainer.style.display = 'none';
  }
  updateBrandLivePreview();
};

window.populateBrandInputs = function() {
  const brand = getActiveBrand();
  currentEditingBrandType = brand.logoType || 'monogram';
  setBrandType(currentEditingBrandType);

  const monoInput = document.getElementById('brand-monogram-text-input');
  if (monoInput) monoInput.value = brand.monogramText || 'DS';

  const urlInput = document.getElementById('brand-logo-url-input');
  if (urlInput) urlInput.value = brand.logoImageUrl || '';

  const removeBtn = document.getElementById('btn-remove-logo-img');
  if (removeBtn) removeBtn.style.display = brand.logoImageUrl ? 'inline-flex' : 'none';

  const slider = document.getElementById('brand-logo-height-slider');
  const sliderVal = document.getElementById('brand-logo-height-val');
  if (slider) slider.value = brand.logoImageHeight || 40;
  if (sliderVal) sliderVal.textContent = `${brand.logoImageHeight || 40}px`;

  const nameFirst = document.getElementById('brand-name-first-input');
  if (nameFirst) nameFirst.value = brand.nameFirst !== undefined ? brand.nameFirst : 'DASH';

  const nameSecond = document.getElementById('brand-name-second-input');
  if (nameSecond) nameSecond.value = brand.nameSecond !== undefined ? brand.nameSecond : 'SOLUTIONS';

  const showNameChk = document.getElementById('brand-show-name-chk');
  if (showNameChk) showNameChk.checked = brand.showName !== false;

  const taglineInput = document.getElementById('brand-tagline-input');
  if (taglineInput) taglineInput.value = brand.tagline !== undefined ? brand.tagline : 'ENTERPRISE TECHNOLOGY';

  const showTaglineChk = document.getElementById('brand-show-tagline-chk');
  if (showTaglineChk) showTaglineChk.checked = brand.showTagline !== false;

  const footerDescInput = document.getElementById('brand-footer-desc-input');
  if (footerDescInput) footerDescInput.value = brand.footerDesc || defaultSiteContent.brand.footerDesc;

  if (brand.logoImageUrl && currentEditingBrandType === 'image') {
    inspectAndDisplayLogoDimensions(brand.logoImageUrl);
  } else {
    inspectAndDisplayLogoDimensions('');
  }
};

window.inspectAndDisplayLogoDimensions = function(url) {
  const feedbackEl = document.getElementById('brand-logo-dimensions-feedback');
  if (!feedbackEl) return;

  if (!url || typeof url !== 'string' || !url.trim()) {
    feedbackEl.style.display = 'none';
    feedbackEl.innerHTML = '';
    return;
  }

  const testImg = new Image();
  testImg.onload = function() {
    const w = testImg.naturalWidth;
    const h = testImg.naturalHeight;
    const isSvg = url.includes('image/svg') || url.toLowerCase().endsWith('.svg');

    feedbackEl.style.display = 'flex';

    if (w === 0 || h === 0) {
      feedbackEl.style.display = 'none';
      return;
    }

    const ratioNum = w / h;
    const ratioStr = ratioNum.toFixed(1);
    let ratioLabel = 'Horizontal';
    if (Math.abs(w - h) <= Math.max(w, h) * 0.1) {
      ratioLabel = 'Quadrado (1:1)';
    } else if (w < h) {
      ratioLabel = 'Vertical';
    } else if (ratioNum >= 2.5) {
      ratioLabel = 'Horizontal Panorâmico';
    }

    let isGood = true;
    let statusText = 'Excelente proporção';
    let tip = 'Dimensões adequadas para o cabeçalho.';

    if (isSvg) {
      isGood = true;
      statusText = 'Vetor SVG';
      tip = 'Formato vetorial com nitidez infinita em qualquer resolução.';
    } else if (h < 50) {
      isGood = false;
      statusText = 'Atenção: Altura baixa';
      tip = `A imagem possui apenas ${h}px de altura. Pode perder nitidez em telas de alta densidade (Retina). Recomendamos mínimo de 80px a 100px.`;
    } else if (w < h) {
      isGood = false;
      statusText = 'Orientação Vertical';
      tip = 'Imagens verticais podem ficar pequenas no cabeçalho horizontal. Recomendamos logos horizontais (~3:1 ou 4:1) ou símbolo quadrado.';
    } else if (ratioNum >= 2 && ratioNum <= 5 && h >= 60) {
      isGood = true;
      statusText = 'Dimensões Ideais';
      tip = 'Proporção retangular perfeita para o menu de navegação.';
    } else if (Math.abs(w - h) <= Math.max(w, h) * 0.1 && h >= 60) {
      isGood = true;
      statusText = 'Ícone Quadrado Ideal';
      tip = 'Símbolo quadrado perfeito para ser exibido junto ao nome da empresa.';
    } else {
      isGood = true;
      statusText = 'Compatível';
      tip = 'A imagem será ajustada proporcionalmente pelo controle de altura abaixo.';
    }

    feedbackEl.className = `brand-dim-feedback ${isGood ? 'good' : 'warning'}`;
    feedbackEl.innerHTML = `
      <div class="brand-dim-feedback-info">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div>
          <div><strong>Dimensões Detectadas:</strong> ${w} × ${h} px <span style="color:var(--text-muted); font-size:0.75rem;">(${ratioLabel} &bull; Proporção ${ratioStr}:1)</span></div>
          <div style="font-size:0.74rem; color:var(--text-muted); margin-top:2px;">${tip}</div>
        </div>
      </div>
      <span class="brand-dim-feedback-status">${statusText}</span>
    `;
  };

  testImg.onerror = function() {
    feedbackEl.style.display = 'none';
  };

  testImg.src = url;
};

window.updateBrandLivePreview = function() {
  const brandObj = {
    logoType: currentEditingBrandType,
    monogramText: document.getElementById('brand-monogram-text-input')?.value.trim() || 'DS',
    logoImageUrl: document.getElementById('brand-logo-url-input')?.value.trim() || '',
    logoImageHeight: parseInt(document.getElementById('brand-logo-height-slider')?.value || '40', 10),
    showName: document.getElementById('brand-show-name-chk') ? document.getElementById('brand-show-name-chk').checked : true,
    nameFirst: document.getElementById('brand-name-first-input')?.value.trim() || '',
    nameSecond: document.getElementById('brand-name-second-input')?.value.trim() || '',
    showTagline: document.getElementById('brand-show-tagline-chk') ? document.getElementById('brand-show-tagline-chk').checked : true,
    tagline: document.getElementById('brand-tagline-input')?.value.trim() || '',
    footerDesc: document.getElementById('brand-footer-desc-input')?.value.trim() || ''
  };

  const sliderVal = document.getElementById('brand-logo-height-val');
  if (sliderVal) sliderVal.textContent = `${brandObj.logoImageHeight}px`;

  const removeBtn = document.getElementById('btn-remove-logo-img');
  if (removeBtn) removeBtn.style.display = brandObj.logoImageUrl ? 'inline-flex' : 'none';

  if (currentEditingBrandType === 'image' && brandObj.logoImageUrl) {
    inspectAndDisplayLogoDimensions(brandObj.logoImageUrl);
  } else {
    inspectAndDisplayLogoDimensions('');
  }

  const previewHtml = buildBrandLogoHTML(brandObj, { isPreview: true });

  const modalPreview = document.getElementById('modal-brand-preview-display');
  if (modalPreview) modalPreview.innerHTML = previewHtml;

  const drawerPreview = document.getElementById('drawer-brand-preview-display');
  if (drawerPreview) drawerPreview.innerHTML = previewHtml;
};

window.handleLogoFileUpload = function(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Por favor, selecione um arquivo de imagem válido (PNG, SVG, JPG, WebP).');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const urlInput = document.getElementById('brand-logo-url-input');
    if (urlInput) urlInput.value = dataUrl;
    setBrandType('image');
    updateBrandLivePreview();
    inspectAndDisplayLogoDimensions(dataUrl);
    showToast('Logotipo carregado com sucesso! Verifique as dimensões e clique em "Salvar".');
  };
  reader.readAsDataURL(file);
};

window.clearLogoImage = function() {
  const urlInput = document.getElementById('brand-logo-url-input');
  if (urlInput) urlInput.value = '';
  const filePicker = document.getElementById('brand-logo-file-picker');
  if (filePicker) filePicker.value = '';
  setBrandType('monogram');
  updateBrandLivePreview();
  inspectAndDisplayLogoDimensions('');
  showToast('Imagem removida. Modo monograma ativado.');
};

window.saveBrandFromForm = function() {
  const brandObj = {
    logoType: currentEditingBrandType,
    monogramText: document.getElementById('brand-monogram-text-input')?.value.trim() || 'DS',
    logoImageUrl: document.getElementById('brand-logo-url-input')?.value.trim() || '',
    logoImageHeight: parseInt(document.getElementById('brand-logo-height-slider')?.value || '40', 10),
    showName: document.getElementById('brand-show-name-chk') ? document.getElementById('brand-show-name-chk').checked : true,
    nameFirst: document.getElementById('brand-name-first-input')?.value.trim() || '',
    nameSecond: document.getElementById('brand-name-second-input')?.value.trim() || '',
    showTagline: document.getElementById('brand-show-tagline-chk') ? document.getElementById('brand-show-tagline-chk').checked : true,
    tagline: document.getElementById('brand-tagline-input')?.value.trim() || '',
    footerDesc: document.getElementById('brand-footer-desc-input')?.value.trim() || defaultSiteContent.brand.footerDesc
  };

  siteContent.brand = brandObj;
  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));

  renderBrandLogo();
  closeBrandEditorModal();
  showToast('Identidade visual e logotipo atualizados com sucesso!');
};

window.resetBrandToDefault = function() {
  if (confirm('Deseja restaurar a identidade visual e o logotipo para o padrão original da Dash Solutions?')) {
    siteContent.brand = JSON.parse(JSON.stringify(defaultSiteContent.brand));
    localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
    populateBrandInputs();
    updateBrandLivePreview();
    renderBrandLogo();
    showToast('Identidade visual restaurada para o padrão.');
  }
};

/* ==========================================================================
   ESTÚDIO DE CORES & PALETAS DE IDENTIDADE VISUAL (CUSTOMIZAÇÃO DINÂMICA)
   ========================================================================== */

const THEME_PRESETS = [
  {
    id: "default",
    name: "Ouro & Marinho Nobre",
    tag: "Clássico Dash / G4",
    desc: "A paleta corporativa oficial com sofisticação em tons de ouro e marinho profundo.",
    primaryColor: "#B9915B",
    secondaryColor: "#C9A96E",
    darkAccent: "#977342",
    bgMain: "#001F35",
    bgDeep: "#01121E",
    bgSurface: "#06263F"
  },
  {
    id: "emerald",
    name: "Esmeralda & Noite Tech",
    tag: "FinTech & ESG",
    desc: "Verde esmeralda vibrante e floresta noturna. Transmite sustentabilidade e precisão financeira.",
    primaryColor: "#10B981",
    secondaryColor: "#34D399",
    darkAccent: "#059669",
    bgMain: "#062822",
    bgDeep: "#021411",
    bgSurface: "#0A3830"
  },
  {
    id: "sapphire",
    name: "Safira & Oceano Azure",
    tag: "Enterprise Cloud & Cyber",
    desc: "Azul safira elétrico com tons de oceano escuro. Ideal para empresas de dados, cloud e infraestrutura.",
    primaryColor: "#0284C7",
    secondaryColor: "#38BDF8",
    darkAccent: "#0369A1",
    bgMain: "#051D38",
    bgDeep: "#020E1C",
    bgSurface: "#0A2B52"
  },
  {
    id: "ruby",
    name: "Rubi Imperial & Grafite",
    tag: "Executivo & Liderança",
    desc: "Vermelho rubi requintado e fundo grafite escuro com nuances de vinho. Imponência e governança.",
    primaryColor: "#E11D48",
    secondaryColor: "#FB7185",
    darkAccent: "#9F1239",
    bgMain: "#260D16",
    bgDeep: "#13040A",
    bgSurface: "#3B1424"
  },
  {
    id: "purple",
    name: "Púrpura Inovação & Noite",
    tag: "IA & Deep Tech",
    desc: "Violeta vibrante de alta tecnologia com base ultra dark. Perfeito para inteligência artificial e vanguarda.",
    primaryColor: "#8B5CF6",
    secondaryColor: "#A78BFA",
    darkAccent: "#6D28D9",
    bgMain: "#1A102F",
    bgDeep: "#0C0617",
    bgSurface: "#281A46"
  },
  {
    id: "amber",
    name: "Âmbar Solar & Ônix Puro",
    tag: "Minimalista & Arquitetura",
    desc: "Dourado quente e vibrante sobre fundo ônix neutro de altíssimo contraste.",
    primaryColor: "#F59E0B",
    secondaryColor: "#FCD34D",
    darkAccent: "#B45309",
    bgMain: "#18181B",
    bgDeep: "#09090B",
    bgSurface: "#27272A"
  },
  {
    id: "cyan",
    name: "Ciano Matrix & Meia-Noite",
    tag: "Alta Conectividade",
    desc: "Ciano neon reluzente com fundo ciberespacial escuro. Estilo futurista e dinâmico.",
    primaryColor: "#06B6D4",
    secondaryColor: "#67E8F9",
    darkAccent: "#0E7490",
    bgMain: "#051E28",
    bgDeep: "#010F15",
    bgSurface: "#0A2C3A"
  },
  {
    id: "titanium",
    name: "Titânio & Prata Real",
    tag: "Elegância Platina",
    desc: "Prata escovada com tons de ardósia noturna. Visual clean, discreto e de máxima sobriedade.",
    primaryColor: "#CBD5E1",
    secondaryColor: "#F1F5F9",
    darkAccent: "#94A3B8",
    bgMain: "#0F172A",
    bgDeep: "#020617",
    bgSurface: "#1E293B"
  }
];

window.THEME_PRESETS = THEME_PRESETS;


// Funções Utilitárias de Cores (Cálculo Harmônico)
function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string') return { r: 185, g: 145, b: 91, str: "185, 145, 91" };
  let cleaned = hex.replace('#', '').trim();
  if (cleaned.length === 3) {
    cleaned = cleaned.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleaned, 16);
  if (isNaN(num) || cleaned.length !== 6) {
    return { r: 185, g: 145, b: 91, str: "185, 145, 91" };
  }
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b, str: `${r}, ${g}, ${b}` };
}

function darkenHex(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = Math.max(0, 1 - percent / 100);
  const dr = Math.round(r * factor);
  const dg = Math.round(g * factor);
  const db = Math.round(b * factor);
  return `#${dr.toString(16).padStart(2, '0')}${dg.toString(16).padStart(2, '0')}${db.toString(16).padStart(2, '0')}`;
}

function lightenHex(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = Math.min(1, percent / 100);
  const lr = Math.round(r + (255 - r) * factor);
  const lg = Math.round(g + (255 - g) * factor);
  const lb = Math.round(b + (255 - b) * factor);
  return `#${lr.toString(16).padStart(2, '0')}${lg.toString(16).padStart(2, '0')}${lb.toString(16).padStart(2, '0')}`;
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getActiveTheme() {
  return siteContent.theme || defaultSiteContent.theme;
}

// Persistência com o Servidor Backend (theme.json)
async function saveThemeToServer(theme) {
  try {
    const res = await fetch('/api/save-theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(theme)
    });
    if (res.ok) {
      const data = await res.json();
      console.log('[CMS] Tema persistido com sucesso no servidor:', data);
      const syncEl = document.getElementById('drawer-sync-status-indicator');
      if (syncEl) syncEl.innerHTML = '<span>✓ Sincronizado</span>';
      return true;
    }
  } catch (err) {
    console.log('[CMS] Modo offline / estático (persiste via localStorage):', err.message);
  }
  return false;
}

// Sincronização Automática com theme.json na Inicialização
async function syncThemeFromServer() {
  try {
    const res = await fetch('theme.json?v=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const serverTheme = await res.json();
      if (serverTheme && serverTheme.primaryColor) {
        siteContent.theme = { ...defaultSiteContent.theme, ...serverTheme };
        currentDraftTheme = { ...siteContent.theme };
        localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
        applyTheme(siteContent.theme);
        renderThemePresets();
        populateThemeInputs(siteContent.theme);
        updateDrawerThemeStatus(siteContent.theme);
        console.log('[CMS] Tema sincronizado com sucesso do servidor (theme.json):', siteContent.theme.preset || 'custom');
      }
    }
  } catch (err) {
    console.log('[CMS] Sem conexão com theme.json, usando cache local:', err.message);
  }
}

// Atualização do Indicador de Tema Ativo na Gaveta CMS
function updateDrawerThemeStatus(theme) {
  const current = theme || getActiveTheme();
  const nameEl = document.getElementById('drawer-status-theme-name');
  const dotEl = document.getElementById('drawer-status-swatch-dot');
  if (nameEl) {
    const matched = THEME_PRESETS.find(p => p.id === current.preset);
    nameEl.textContent = matched ? matched.name : `Personalizada (${current.primaryColor})`;
  }
  if (dotEl) {
    dotEl.style.backgroundColor = current.primaryColor || '#B9915B';
    dotEl.style.boxShadow = `0 0 10px rgba(${hexToRgb(current.primaryColor).str}, 0.5)`;
  }
}

// Estado de rascunho do tema e timer de auto-salvamento
let currentDraftTheme = null;
let themeAutoSaveTimer = null;

// Função Mestra de Commit e Persistência Imediata de Tema
function commitAndPersistTheme(themeObj, showToastMsg = null) {
  if (!themeObj) return;
  const theme = { ...defaultSiteContent.theme, ...themeObj };
  siteContent.theme = { ...theme };
  currentDraftTheme = { ...theme };

  // 1. Salva imediatamente no localStorage (sem perdas entre reloads)
  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));

  // 2. Aplica variáveis CSS instantaneamente no DOM
  applyTheme(theme);

  // 3. Atualiza controles visuais
  populateThemeInputs(theme);
  renderThemePresets();
  updateThemePreviewShowcase(theme);
  updateDrawerThemeStatus(theme);

  // 4. Salva no servidor (/api/save-theme -> theme.json)
  saveThemeToServer(theme);

  // 5. Notificação de confirmação ao usuário
  if (showToastMsg) {
    showToast(showToastMsg);
  }
}

function applyTheme(themeObj, isPreview = false) {
  if (!themeObj) return;
  const theme = { ...defaultSiteContent.theme, ...themeObj };
  
  const primaryRgb = hexToRgb(theme.primaryColor);
  const secondaryRgb = hexToRgb(theme.secondaryColor);
  const darkAccentRgb = hexToRgb(theme.darkAccent || darkenHex(theme.primaryColor, 20));
  const bgMainRgb = hexToRgb(theme.bgMain);
  const bgDeepRgb = hexToRgb(theme.bgDeep);
  const bgSurfaceRgb = hexToRgb(theme.bgSurface);

  const root = document.documentElement;
  
  // 1. Tokens de canais RGB
  root.style.setProperty('--primary-rgb', primaryRgb.str);
  root.style.setProperty('--secondary-rgb', secondaryRgb.str);
  root.style.setProperty('--dark-accent-rgb', darkAccentRgb.str);
  root.style.setProperty('--bg-navy-rgb', bgMainRgb.str);
  root.style.setProperty('--bg-deep-rgb', bgDeepRgb.str);
  root.style.setProperty('--bg-surface-rgb', bgSurfaceRgb.str);

  // 2. Cores Hex principais
  root.style.setProperty('--royal-gold', theme.primaryColor);
  root.style.setProperty('--gold-light', theme.secondaryColor);
  root.style.setProperty('--gold-dark', theme.darkAccent || darkenHex(theme.primaryColor, 20));
  root.style.setProperty('--navy-blue', theme.bgMain);
  root.style.setProperty('--deep-dark', theme.bgDeep);
  root.style.setProperty('--surface-dark', theme.bgSurface);
  root.style.setProperty('--maua-blue', darkenHex(theme.bgMain, 15));

  // 3. Gradientes sincronizados
  root.style.setProperty('--gold-gradient', `linear-gradient(90deg, ${theme.darkAccent || darkenHex(theme.primaryColor, 20)} 0%, ${theme.secondaryColor} 100%)`);
  root.style.setProperty('--gold-gradient-hover', `linear-gradient(90deg, ${theme.secondaryColor} 0%, #FFFFFF 100%)`);
  root.style.setProperty('--gold-gradient-subtle', `linear-gradient(135deg, rgba(${primaryRgb.str}, 0.15) 0%, rgba(${bgMainRgb.str}, 0.4) 100%)`);
  root.style.setProperty('--hero-gradient', `radial-gradient(circle at 50% 20%, rgba(${bgSurfaceRgb.str}, 0.45) 0%, ${theme.bgMain} 70%, ${theme.bgDeep} 100%)`);
  root.style.setProperty('--card-gradient', `linear-gradient(180deg, rgba(${bgSurfaceRgb.str}, 0.6) 0%, rgba(${bgMainRgb.str}, 0.9) 100%)`);

  // 4. Efeitos de brilho e sombras
  root.style.setProperty('--gold-glow', `rgba(${primaryRgb.str}, 0.25)`);
  root.style.setProperty('--border-subtle', `rgba(${primaryRgb.str}, 0.18)`);
  root.style.setProperty('--border-hover', `rgba(${secondaryRgb.str}, 0.5)`);
  root.style.setProperty('--shadow-gold', `0 4px 24px rgba(${primaryRgb.str}, 0.28)`);
  root.style.setProperty('--shadow-hover', `0 16px 48px rgba(0, 15, 28, 0.6), 0 0 20px rgba(${primaryRgb.str}, 0.25)`);

  // 5. Atualiza label e vitrine de demonstração
  updateThemePreviewShowcase(theme);
}

window.applyTheme = applyTheme;


function updateThemePreviewShowcase(theme) {
  const label = document.getElementById('theme-current-preset-label');
  if (label) {
    const matched = THEME_PRESETS.find(p => p.id === theme.preset);
    label.textContent = matched ? `Paleta: ${matched.name}` : `Paleta: Personalizada (${theme.primaryColor})`;
  }
}

window.openThemeCustomizerModal = function() {
  closeAdminDrawer();
  currentDraftTheme = JSON.parse(JSON.stringify(getActiveTheme()));
  renderThemePresets();
  populateThemeInputs(currentDraftTheme);
  applyTheme(currentDraftTheme, true);
  
  const modal = document.getElementById('theme-customizer-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeThemeCustomizerModal = function() {
  clearTimeout(themeAutoSaveTimer);
  if (currentDraftTheme) {
    commitAndPersistTheme(currentDraftTheme);
  }
  const modal = document.getElementById('theme-customizer-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

window.cancelThemeChanges = function() {
  applyTheme(getActiveTheme());
  const modal = document.getElementById('theme-customizer-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

window.saveThemeChanges = function() {
  clearTimeout(themeAutoSaveTimer);
  if (!currentDraftTheme) currentDraftTheme = { ...getActiveTheme() };
  commitAndPersistTheme(currentDraftTheme, '🎨 Identidade visual e paleta de cores salvas com sucesso em todo o site!');
  const modal = document.getElementById('theme-customizer-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

window.resetThemeToDefault = function() {
  if (confirm('Deseja restaurar as cores do site para a paleta padrão (Ouro & Marinho Nobre)?')) {
    const defaultPreset = THEME_PRESETS[0];
    const defTheme = {
      preset: "default",
      name: defaultPreset.name,
      primaryColor: defaultPreset.primaryColor,
      secondaryColor: defaultPreset.secondaryColor,
      darkAccent: defaultPreset.darkAccent,
      bgMain: defaultPreset.bgMain,
      bgDeep: defaultPreset.bgDeep,
      bgSurface: defaultPreset.bgSurface
    };
    commitAndPersistTheme(defTheme, 'Paleta de cores restaurada para o padrão oficial.');
  }
};

window.selectThemePreset = function(presetId) {
  const preset = THEME_PRESETS.find(p => p.id === presetId);
  if (!preset) return;

  const newTheme = {
    preset: preset.id,
    name: preset.name,
    primaryColor: preset.primaryColor,
    secondaryColor: preset.secondaryColor,
    darkAccent: preset.darkAccent,
    bgMain: preset.bgMain,
    bgDeep: preset.bgDeep,
    bgSurface: preset.bgSurface
  };

  commitAndPersistTheme(newTheme, `🎨 Paleta "${preset.name}" aplicada e salva com sucesso!`);
};

window.handleCustomColorInput = function(prop, val) {
  if (!currentDraftTheme) currentDraftTheme = { ...getActiveTheme() };
  currentDraftTheme[prop] = val;
  currentDraftTheme.preset = "custom";

  if (prop === 'primaryColor') {
    currentDraftTheme.darkAccent = darkenHex(val, 20);
  }

  // Sincroniza o input de texto HEX
  const hexInputId = `theme-hex-${prop === 'primaryColor' ? 'primary' : prop === 'secondaryColor' ? 'secondary' : prop === 'bgMain' ? 'bg-main' : prop === 'bgDeep' ? 'bg-deep' : 'bg-surface'}`;
  const hexEl = document.getElementById(hexInputId);
  if (hexEl) hexEl.value = val.toUpperCase();

  applyTheme(currentDraftTheme, true);
  updateThemePreviewShowcase(currentDraftTheme);

  // Auto-salvamento com debounce (400ms) para persistir sem atrasos nem perda
  clearTimeout(themeAutoSaveTimer);
  const syncEl = document.getElementById('drawer-sync-status-indicator');
  if (syncEl) syncEl.innerHTML = '<span style="color:#F59E0B;">Salvando...</span>';

  themeAutoSaveTimer = setTimeout(() => {
    if (currentDraftTheme) {
      commitAndPersistTheme(currentDraftTheme);
    }
  }, 400);
};

window.handleCustomColorHexInput = function(prop, rawVal) {
  let val = rawVal.trim();
  if (!val.startsWith('#')) val = '#' + val;
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    const colorInputId = `theme-color-${prop === 'primaryColor' ? 'primary' : prop === 'secondaryColor' ? 'secondary' : prop === 'bgMain' ? 'bg-main' : prop === 'bgDeep' ? 'bg-deep' : 'bg-surface'}`;
    const colorEl = document.getElementById(colorInputId);
    if (colorEl) colorEl.value = val;
    handleCustomColorInput(prop, val);
  }
};

window.autoHarmonizeCurrentTheme = function() {
  if (!currentDraftTheme) currentDraftTheme = { ...getActiveTheme() };
  const primaryHex = currentDraftTheme.primaryColor || '#B9915B';
  const { r, g, b } = hexToRgb(primaryHex);
  const [h, s, l] = rgbToHsl(r, g, b);

  // Calcula cores harmônicas baseadas no matiz da cor primária
  // 1. Secundária mais luminosa
  const secL = Math.min(85, Math.max(l + 14, 60));
  const secHex = hslToHex(h, Math.min(100, s + 5), secL);

  // 2. Fundo principal escuro com saturação moderada do mesmo matiz
  const bgMainHex = hslToHex(h, Math.min(45, Math.max(15, Math.round(s * 0.4))), 10);

  // 3. Fundo profundo ultra escuro
  const bgDeepHex = hslToHex(h, Math.min(45, Math.max(15, Math.round(s * 0.4))), 5);

  // 4. Superfície dos cards
  const bgSurfaceHex = hslToHex(h, Math.min(45, Math.max(20, Math.round(s * 0.45))), 14);

  currentDraftTheme.preset = "custom";
  currentDraftTheme.secondaryColor = secHex;
  currentDraftTheme.darkAccent = darkenHex(primaryHex, 20);
  currentDraftTheme.bgMain = bgMainHex;
  currentDraftTheme.bgDeep = bgDeepHex;
  currentDraftTheme.bgSurface = bgSurfaceHex;

  commitAndPersistTheme(currentDraftTheme, '✨ Fundos e contrastes harmonizados e salvos automaticamente!');
};

function populateThemeInputs(theme) {
  if (!theme) return;
  const setField = (prop, colorId, hexId) => {
    const val = theme[prop] || '';
    const colorEl = document.getElementById(colorId);
    const hexEl = document.getElementById(hexId);
    if (colorEl) colorEl.value = val;
    if (hexEl) hexEl.value = val.toUpperCase();
  };

  setField('primaryColor', 'theme-color-primary', 'theme-hex-primary');
  setField('secondaryColor', 'theme-color-secondary', 'theme-hex-secondary');
  setField('bgMain', 'theme-color-bg-main', 'theme-hex-bg-main');
  setField('bgDeep', 'theme-color-bg-deep', 'theme-hex-bg-deep');
  setField('bgSurface', 'theme-color-bg-surface', 'theme-hex-bg-surface');
}

function renderThemePresets() {
  const activeTheme = currentDraftTheme || getActiveTheme();
  
  const generateCardsHTML = (isDrawer = false) => {
    return THEME_PRESETS.map(preset => {
      const isActive = activeTheme.preset === preset.id;
      return `
        <div class="theme-palette-card ${isActive ? 'active' : ''}" onclick="selectThemePreset('${preset.id}')" title="Clique para aplicar a paleta ${escapeHtml(preset.name)}">
          <div class="theme-active-badge">✓</div>
          <div class="theme-palette-card-header">
            <div>
              <div class="theme-palette-name">${escapeHtml(preset.name)}</div>
              <div style="font-size:0.75rem; color:var(--text-dim); margin-top:2px;">${escapeHtml(preset.desc)}</div>
            </div>
            <span class="theme-palette-tag">${escapeHtml(preset.tag)}</span>
          </div>

          <div class="theme-swatches">
            <div class="theme-swatch-dot" style="background:${preset.primaryColor};" title="Primária: ${preset.primaryColor}"></div>
            <div class="theme-swatch-dot" style="background:${preset.secondaryColor};" title="Secundária: ${preset.secondaryColor}"></div>
            <div class="theme-swatch-bar" style="background:linear-gradient(90deg, ${preset.bgDeep} 0%, ${preset.bgMain} 50%, ${preset.bgSurface} 100%);" title="Fundos: ${preset.bgDeep} / ${preset.bgMain}"></div>
          </div>
        </div>
      `;
    }).join('');
  };

  // Renderiza no Modal
  const modalContainer = document.getElementById('theme-palette-presets-container');
  if (modalContainer) {
    modalContainer.innerHTML = generateCardsHTML(false);
  }

  // Renderiza no Drawer CMS
  const drawerContainer = document.getElementById('drawer-theme-palette-presets-container');
  if (drawerContainer) {
    drawerContainer.innerHTML = generateCardsHTML(true);
  }
}

/* ==========================================================================
   RENDERIZAÇÃO DA SEÇÃO DE MÉTRICAS (BARRA DE INDICADORES)
   ========================================================================== */
function renderStatsSection() {
  const grid = document.getElementById('stats-grid-container');
  if (!grid || !siteContent.metrics) return;

  grid.innerHTML = siteContent.metrics.map((m, index) => `
    <div class="stat-card" data-metric-index="${index}">
      <div class="stat-number">${escapeHtml(m.val)}</div>
      <div class="stat-label">${escapeHtml(m.label)}</div>
      <div class="stat-desc">${escapeHtml(m.desc)}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDERIZAÇÃO DA SEÇÃO SOBRE NÓS COMPLETA (TEXTOS, PILARES & ECOSSISTEMA)
   ========================================================================== */
function renderAboutSection() {
  const container = document.getElementById('about-grid-container');
  if (!container || !siteContent.about) return;
  const ab = siteContent.about;

  container.innerHTML = `
    <!-- Left Content -->
    <div class="about-content-left">
      <span class="section-tag">${escapeHtml(ab.tag || 'SOBRE NÓS')}</span>
      <h2 class="section-title">${ab.title}</h2>
      <div class="about-quote">"${escapeHtml(ab.quote)}"</div>
      <p>${escapeHtml(ab.desc)}</p>

      <div class="about-pillars">
        <div class="pillar-item">
          <span class="pillar-number">${escapeHtml(ab.pillar1Num || '01')}</span>
          <div class="pillar-text">
            <h4>${escapeHtml(ab.pillar1Title)}</h4>
            <p>${escapeHtml(ab.pillar1Desc)}</p>
          </div>
        </div>
        <div class="pillar-item">
          <span class="pillar-number">${escapeHtml(ab.pillar2Num || '02')}</span>
          <div class="pillar-text">
            <h4>${escapeHtml(ab.pillar2Title)}</h4>
            <p>${escapeHtml(ab.pillar2Desc)}</p>
          </div>
        </div>
        <div class="pillar-item">
          <span class="pillar-number">${escapeHtml(ab.pillar3Num || '03')}</span>
          <div class="pillar-text">
            <h4>${escapeHtml(ab.pillar3Title)}</h4>
            <p>${escapeHtml(ab.pillar3Desc)}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Visual (Tech Ecosystem) -->
    <div class="about-visual-right">
      <div class="tech-ecosystem-box">
        <h3 class="tech-box-title">${escapeHtml(ab.ecosystemTitle)}</h3>
        <p class="tech-box-subtitle">${escapeHtml(ab.ecosystemSubtitle)}</p>

        <div class="tech-badges-grid">
          ${(ab.technologies || []).map(tech => `
            <div class="tech-badge-card">${escapeHtml(tech)}</div>
          `).join('')}
        </div>

        <div class="certifications-strip">
          ${(ab.certifications || []).map(cert => `
            <span>${escapeHtml(cert)}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   APLICAÇÃO DOS TEXTOS GERAIS NO DOM
   ========================================================================== */
function applyGeneralTextsToDOM() {
  const bind = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  };
  const bindHTML = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.innerHTML = value;
  };

  bind('top-announcement-badge', siteContent.announcementBadge);
  bind('top-announcement-text', siteContent.announcementText);
  bind('top-announcement-link-text', siteContent.announcementLinkText);
  bind('hero-tag-text', siteContent.heroTag);
  bindHTML('hero-title-text', siteContent.heroTitle);
  bind('hero-subtitle-text', siteContent.heroSubtitle);
  bind('company-address-text', siteContent.companyAddress);
  bind('company-email-text', siteContent.companyEmail);
  bind('company-phone-text', siteContent.companyPhone);
}

/* ==========================================================================
   SISTEMA ADMINISTRATIVO (AUTENTICAÇÃO & GESTÃO)
   ========================================================================== */
const ADMIN_USER = "admin";
const ADMIN_PASS = "dash@2026";

function isUserAdmin() {
  return sessionStorage.getItem('dash_admin_authenticated') === 'true';
}

function initAdminSystem() {
  if (isUserAdmin()) {
    document.body.classList.add('admin-active');
  } else {
    document.body.classList.remove('admin-active');
  }

  // Eventos de Login
  const loginForm = document.getElementById('admin-login-form');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('admin-user-input').value.trim();
    const pass = document.getElementById('admin-pass-input').value.trim();

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      sessionStorage.setItem('dash_admin_authenticated', 'true');
      document.body.classList.add('admin-active');
      closeAdminLoginModal();
      showToast('Autenticado com sucesso como Administrador Dash!');
      renderPortfolioCards();
    } else {
      showToast('Usuário ou senha inválidos.');
    }
  });

  // Evento de Logout
  document.getElementById('admin-logout-btn')?.addEventListener('click', () => {
    sessionStorage.removeItem('dash_admin_authenticated');
    document.body.classList.remove('admin-active');
    closeAdminDrawer();
    closeMetricsEditorModal();
    closeAboutEditorModal();
    showToast('Sessão administrativa encerrada.');
    renderPortfolioCards();
  });

  // Botões de Abertura
  document.getElementById('open-admin-login-btn')?.addEventListener('click', openAdminLoginModal);
  document.getElementById('footer-admin-btn')?.addEventListener('click', openAdminLoginModal);
  document.getElementById('close-admin-login-btn')?.addEventListener('click', closeAdminLoginModal);

  // Painel CMS (Drawer)
  document.getElementById('open-cms-panel-btn')?.addEventListener('click', openAdminDrawer);
  document.getElementById('close-cms-panel-btn')?.addEventListener('click', closeAdminDrawer);

  // Tabs do CMS
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      target?.classList.add('active');
    });
  });

  // Formulário de Métricas (Dentro do CMS ou via Modal)
  document.getElementById('metrics-editor-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveMetricsFromForm();
  });

  // Formulário de Sobre Nós (Dentro do CMS ou via Modal)
  document.getElementById('about-editor-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveAboutFromForm();
  });

  // Formulário de Edição de Conteúdos Gerais
  document.getElementById('site-content-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    siteContent.heroTitle = document.getElementById('edit-hero-title').value;
    siteContent.heroSubtitle = document.getElementById('edit-hero-subtitle').value;
    siteContent.heroTag = document.getElementById('edit-hero-tag').value;
    siteContent.announcementText = document.getElementById('edit-announcement-text').value;
    siteContent.companyEmail = document.getElementById('edit-company-email').value;
    siteContent.companyPhone = document.getElementById('edit-company-phone').value;
    siteContent.companyAddress = document.getElementById('edit-company-address').value;

    localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
    applyGeneralTextsToDOM();
    showToast('Textos salvos com sucesso!');
  });

  // Formulário do Card (Criar / Editar)
  document.getElementById('card-editor-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveCardFromForm();
  });

  // Botão Adicionar da Barra Admin
  document.getElementById('admin-add-card-btn')?.addEventListener('click', () => {
    openCardEditorModal(null);
  });

  // Backup e Reset
  document.getElementById('btn-reset-defaults')?.addEventListener('click', resetToFactoryDefaults);
  document.getElementById('btn-export-backup')?.addEventListener('click', exportBackupJSON);
  document.getElementById('btn-import-backup')?.addEventListener('click', () => {
    document.getElementById('import-file-input')?.click();
  });
  document.getElementById('import-file-input')?.addEventListener('change', importBackupJSON);

  // Formulário de Framework (Dentro do CMS ou via Modal)
  document.getElementById('framework-editor-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveFrameworkFromForm();
  });

  // Fechar modais ao clicar no backdrop (fora do card)
  document.querySelectorAll('.modal-overlay, .admin-drawer-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        if (overlay.id === 'admin-drawer-overlay') closeAdminDrawer();
        else if (overlay.id === 'about-editor-modal') closeAboutEditorModal();
        else if (overlay.id === 'metrics-editor-modal') closeMetricsEditorModal();
        else if (overlay.id === 'card-editor-modal') closeCardEditorModal();
        else if (overlay.id === 'framework-editor-modal') closeFrameworkEditorModal();
        else if (overlay.id === 'hero-carousel-editor-modal') closeHeroCarouselEditorModal();
        else if (overlay.id === 'brand-editor-modal') closeBrandEditorModal();
        else if (overlay.id === 'admin-login-modal') closeAdminLoginModal();
        else if (overlay.id === 'service-modal-overlay') closeServiceModal();
      }
    });
  });

  // Fechar qualquer modal ativo com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBrandEditorModal();
      closeAboutEditorModal();
      closeMetricsEditorModal();
      closeCardEditorModal();
      closeFrameworkEditorModal();
      closeHeroCarouselEditorModal();
      closeAdminLoginModal();
      closeAdminDrawer();
      closeServiceModal();
    }
  });
}

function openAdminLoginModal() {
  if (isUserAdmin()) {
    openAdminDrawer();
    return;
  }
  const modal = document.getElementById('admin-login-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAdminLoginModal() {
  const modal = document.getElementById('admin-login-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
}

function openAdminDrawer(tabName = 'portfolio') {
  const drawer = document.getElementById('admin-drawer-overlay');
  drawer?.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Ativa a aba solicitada
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(t => {
    if (t.dataset.tab === tabName) t.click();
  });

  // Popula formulários do CMS
  populateBrandInputs();
  updateBrandLivePreview();
  populateMetricsInputs();
  populateAboutInputs();
  populateFrameworkInputs();

  // Popula textos gerais
  document.getElementById('edit-hero-title').value = siteContent.heroTitle || '';
  document.getElementById('edit-hero-subtitle').value = siteContent.heroSubtitle || '';
  document.getElementById('edit-hero-tag').value = siteContent.heroTag || '';
  document.getElementById('edit-announcement-text').value = siteContent.announcementText || '';
  document.getElementById('edit-company-email').value = siteContent.companyEmail || '';
  document.getElementById('edit-company-phone').value = siteContent.companyPhone || '';
  document.getElementById('edit-company-address').value = siteContent.companyAddress || '';

  renderCMSPortfolioTable();
}

function closeAdminDrawer() {
  const drawer = document.getElementById('admin-drawer-overlay');
  drawer?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   EDITOR DE MÉTRICAS (INDICADORES)
   ========================================================================== */
window.openMetricsEditorModal = function() {
  closeAdminDrawer();
  populateMetricsInputs();
  const modal = document.getElementById('metrics-editor-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeMetricsEditorModal = function() {
  const modal = document.getElementById('metrics-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

function populateMetricsInputs() {
  const m = siteContent.metrics || defaultSiteContent.metrics;
  for (let i = 0; i < 4; i++) {
    const val = m[i] ? m[i].val : '';
    const label = m[i] ? m[i].label : '';
    const desc = m[i] ? m[i].desc : '';

    const inputVal = document.getElementById(`edit-metric-${i}-val`);
    const inputLabel = document.getElementById(`edit-metric-${i}-label`);
    const inputDesc = document.getElementById(`edit-metric-${i}-desc`);

    if (inputVal) inputVal.value = val;
    if (inputLabel) inputLabel.value = label;
    if (inputDesc) inputDesc.value = desc;
  }
}

function saveMetricsFromForm() {
  const newMetrics = [];
  for (let i = 0; i < 4; i++) {
    newMetrics.push({
      val: document.getElementById(`edit-metric-${i}-val`)?.value.trim() || '',
      label: document.getElementById(`edit-metric-${i}-label`)?.value.trim() || '',
      desc: document.getElementById(`edit-metric-${i}-desc`)?.value.trim() || ''
    });
  }

  siteContent.metrics = newMetrics;
  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
  renderStatsSection();
  closeMetricsEditorModal();
  showToast('Métricas atualizadas com sucesso!');
  document.querySelector('.metrics-bar')?.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   EDITOR DA SEÇÃO SOBRE NÓS
   ========================================================================== */
window.openAboutEditorModal = function() {
  closeAdminDrawer();
  populateAboutInputs();
  const modal = document.getElementById('about-editor-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeAboutEditorModal = function() {
  const modal = document.getElementById('about-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

function populateAboutInputs() {
  const ab = siteContent.about || defaultSiteContent.about;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('edit-about-tag', ab.tag);
  setVal('edit-about-title', ab.title);
  setVal('edit-about-quote-field', ab.quote);
  setVal('edit-about-desc-field', ab.desc);

  setVal('edit-pillar-1-title', ab.pillar1Title);
  setVal('edit-pillar-1-desc', ab.pillar1Desc);
  setVal('edit-pillar-2-title', ab.pillar2Title);
  setVal('edit-pillar-2-desc', ab.pillar2Desc);
  setVal('edit-pillar-3-title', ab.pillar3Title);
  setVal('edit-pillar-3-desc', ab.pillar3Desc);

  setVal('edit-ecosystem-title', ab.ecosystemTitle);
  setVal('edit-ecosystem-subtitle', ab.ecosystemSubtitle);
  setVal('edit-ecosystem-techs', (ab.technologies || []).join(', '));
  setVal('edit-ecosystem-certs', (ab.certifications || []).join(', '));
}

function saveAboutFromForm() {
  const getVal = (id) => document.getElementById(id)?.value.trim() || '';

  const techs = getVal('edit-ecosystem-techs')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  const certs = getVal('edit-ecosystem-certs')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  siteContent.about = {
    tag: getVal('edit-about-tag') || 'SOBRE NÓS',
    title: getVal('edit-about-title'),
    quote: getVal('edit-about-quote-field'),
    desc: getVal('edit-about-desc-field'),
    pillar1Num: "01",
    pillar1Title: getVal('edit-pillar-1-title'),
    pillar1Desc: getVal('edit-pillar-1-desc'),
    pillar2Num: "02",
    pillar2Title: getVal('edit-pillar-2-title'),
    pillar2Desc: getVal('edit-pillar-2-desc'),
    pillar3Num: "03",
    pillar3Title: getVal('edit-pillar-3-title'),
    pillar3Desc: getVal('edit-pillar-3-desc'),
    ecosystemTitle: getVal('edit-ecosystem-title'),
    ecosystemSubtitle: getVal('edit-ecosystem-subtitle'),
    technologies: techs.length ? techs : defaultSiteContent.about.technologies,
    certifications: certs.length ? certs : defaultSiteContent.about.certifications
  };

  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
  renderAboutSection();
  closeAboutEditorModal();
  showToast('Seção Sobre Nós atualizada com sucesso!');
  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   RENDERIZAÇÃO DA SEÇÃO FRAMEWORK & METODOLOGIA
   ========================================================================== */
function renderFrameworkSection() {
  const fw = siteContent.framework || defaultSiteContent.framework;
  if (!fw) return;

  const tagEl = document.getElementById('framework-tag-text');
  const titleEl = document.getElementById('framework-title-text');
  const subtitleEl = document.getElementById('framework-subtitle-text');
  const grid = document.getElementById('framework-steps-grid');

  if (tagEl) tagEl.textContent = fw.tag || 'NOSSO FRAMEWORK';
  if (titleEl) titleEl.innerHTML = fw.title || 'Como Entregamos Resultados de Ponta a Ponta';
  if (subtitleEl) subtitleEl.textContent = fw.subtitle || '';

  if (grid && fw.steps) {
    grid.innerHTML = fw.steps.map(step => `
      <div class="step-card">
        <div class="step-number">${escapeHtml(step.num)}</div>
        <h3 class="step-title">${escapeHtml(step.title)}</h3>
        <p class="step-desc">${escapeHtml(step.desc)}</p>
      </div>
    `).join('');
  }
}

window.openFrameworkEditorModal = function() {
  closeAdminDrawer();
  populateFrameworkInputs();
  const modal = document.getElementById('framework-editor-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeFrameworkEditorModal = function() {
  const modal = document.getElementById('framework-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

function populateFrameworkInputs() {
  const fw = siteContent.framework || defaultSiteContent.framework;
  if (!fw) return;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('edit-framework-tag', fw.tag);
  setVal('edit-framework-title', fw.title);
  setVal('edit-framework-subtitle', fw.subtitle);

  (fw.steps || []).forEach((step, i) => {
    setVal(`edit-step-${i}-num`, step.num);
    setVal(`edit-step-${i}-title`, step.title);
    setVal(`edit-step-${i}-desc`, step.desc);
  });
}

function saveFrameworkFromForm() {
  const getVal = (id) => document.getElementById(id)?.value.trim() || '';

  const steps = [];
  for (let i = 0; i < 4; i++) {
    steps.push({
      num: getVal(`edit-step-${i}-num`) || `0${i + 1}`,
      title: getVal(`edit-step-${i}-title`),
      desc: getVal(`edit-step-${i}-desc`)
    });
  }

  siteContent.framework = {
    tag: getVal('edit-framework-tag') || 'NOSSO FRAMEWORK',
    title: getVal('edit-framework-title'),
    subtitle: getVal('edit-framework-subtitle'),
    steps
  };

  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
  renderFrameworkSection();
  closeFrameworkEditorModal();
  showToast('Framework metodológico atualizado com sucesso!');
  document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   CARROSSEL DE IMAGENS DO BANNER PRINCIPAL (HERO SECTION)
   ========================================================================== */
let currentCarouselIndex = 0;
let carouselTimer = null;

function renderHeroCarousel() {
  const container = document.getElementById('hero-carousel-container');
  if (!container) return;

  const slides = siteContent.heroCarousel || defaultSiteContent.heroCarousel;
  if (!slides || slides.length === 0) return;

  if (currentCarouselIndex >= slides.length) {
    currentCarouselIndex = 0;
  }

  container.innerHTML = `
    <div class="hero-carousel-slides">
      ${slides.map((s, idx) => `
        <div class="hero-carousel-slide ${idx === currentCarouselIndex ? 'active' : ''}" data-slide-index="${idx}">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" class="hero-slide-img" onerror="this.src='assets/images/slide1-datacenter.jpg'">
          <div class="hero-slide-overlay">
            <div class="slide-header-tags">
              <span class="slide-badge">${escapeHtml(s.badge || 'DASH SOLUTIONS')}</span>
              <span class="slide-indicator-tag">${idx + 1} de ${slides.length}</span>
            </div>
            <div class="slide-bottom-info">
              <h3 class="slide-title">${escapeHtml(s.title)}</h3>
              <p class="slide-desc">${escapeHtml(s.subtitle)}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Setas de Navegação -->
    <button class="hero-carousel-nav prev" onclick="prevCarouselSlide()" aria-label="Slide anterior">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <button class="hero-carousel-nav next" onclick="nextCarouselSlide()" aria-label="Próximo slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>

    <!-- Indicadores de Pontos (Dots) -->
    <div class="hero-carousel-dots">
      ${slides.map((_, idx) => `
        <button class="carousel-dot ${idx === currentCarouselIndex ? 'active' : ''}" onclick="goToCarouselSlide(${idx})" aria-label="Ir para slide ${idx + 1}"></button>
      `).join('')}
    </div>
  `;

  // Pausar auto-play ao passar o mouse por cima
  container.onmouseenter = () => clearInterval(carouselTimer);
  container.onmouseleave = () => startCarouselAutoplay();

  startCarouselAutoplay();
}

function startCarouselAutoplay() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    nextCarouselSlide();
  }, 5000);
}

window.nextCarouselSlide = function() {
  const slides = siteContent.heroCarousel || defaultSiteContent.heroCarousel;
  if (!slides || slides.length <= 1) return;
  currentCarouselIndex = (currentCarouselIndex + 1) % slides.length;
  updateActiveCarouselSlide();
};

window.prevCarouselSlide = function() {
  const slides = siteContent.heroCarousel || defaultSiteContent.heroCarousel;
  if (!slides || slides.length <= 1) return;
  currentCarouselIndex = (currentCarouselIndex - 1 + slides.length) % slides.length;
  updateActiveCarouselSlide();
};

window.goToCarouselSlide = function(idx) {
  currentCarouselIndex = idx;
  updateActiveCarouselSlide();
  startCarouselAutoplay();
};

function updateActiveCarouselSlide() {
  const slides = document.querySelectorAll('.hero-carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  slides.forEach((s, idx) => {
    if (idx === currentCarouselIndex) s.classList.add('active');
    else s.classList.remove('active');
  });

  dots.forEach((d, idx) => {
    if (idx === currentCarouselIndex) d.classList.add('active');
    else d.classList.remove('active');
  });
}

/* ==========================================================================
   GERENCIADOR DO CARROSSEL DE IMAGENS DO BANNER
   ========================================================================== */
let editingCarouselSlides = [];

window.openHeroCarouselEditorModal = function() {
  closeAdminDrawer();
  const modal = document.getElementById('hero-carousel-editor-modal');
  populateCarouselEditor();
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeHeroCarouselEditorModal = function() {
  const modal = document.getElementById('hero-carousel-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

function populateCarouselEditor() {
  const list = document.getElementById('carousel-slides-editor-list');
  if (!list) return;

  editingCarouselSlides = JSON.parse(JSON.stringify(siteContent.heroCarousel || defaultSiteContent.heroCarousel));

  renderCarouselEditorList();
}

function renderCarouselEditorList() {
  const list = document.getElementById('carousel-slides-editor-list');
  if (!list) return;

  list.innerHTML = editingCarouselSlides.map((slide, idx) => `
    <div class="carousel-slide-edit-card" data-slide-index="${idx}">
      <div class="slide-edit-header">
        <span style="font-weight:700; color:var(--gold-light); font-size:0.95rem;">Slide #${idx + 1}</span>
        ${editingCarouselSlides.length > 1 ? `
          <button type="button" class="btn btn-danger btn-sm" onclick="removeCarouselSlide(${idx})" style="padding:4px 10px; font-size:0.75rem;">
            Remover Slide
          </button>
        ` : ''}
      </div>

      <div class="slide-edit-grid">
        <div class="slide-thumb-container">
          <img src="${escapeHtml(slide.image)}" id="slide-preview-${idx}" class="carousel-slide-thumb" alt="Preview" onerror="this.src='assets/images/slide1-datacenter.jpg'">
          <label class="btn btn-secondary btn-sm" style="cursor:pointer; width:100%; text-align:center;">
            📁 Carregar Imagem do PC
            <input type="file" accept="image/*" onchange="handleSlideFileUpload(event, ${idx})" style="display:none;">
          </label>
          <div class="preset-pills-row">
            <span style="font-size:0.7rem; color:var(--text-dim); width:100%;">Presets Corporativos:</span>
            <button type="button" class="preset-pill-btn" onclick="setSlidePreset(${idx}, 'datacenter')">Datacenter</button>
            <button type="button" class="preset-pill-btn" onclick="setSlidePreset(${idx}, 'software')">Software/IA</button>
            <button type="button" class="preset-pill-btn" onclick="setSlidePreset(${idx}, 'cyber')">Cibersegurança</button>
          </div>
        </div>

        <div class="form-grid" style="gap:12px;">
          <div class="form-group full-width">
            <label class="form-label" for="slide-img-url-${idx}">URL da Imagem ou Caminho Local</label>
            <input class="form-input" type="text" id="slide-img-url-${idx}" value="${escapeHtml(slide.image)}" oninput="updateSlidePreviewFromInput(${idx}, this.value)" placeholder="assets/images/slide1-datacenter.jpg ou https://...">
          </div>

          <div class="form-group">
            <label class="form-label" for="slide-badge-${idx}">Tag / Badge Superior *</label>
            <input class="form-input" type="text" id="slide-badge-${idx}" value="${escapeHtml(slide.badge || '')}" placeholder="INFRAESTRUTURA & NUVEM">
          </div>

          <div class="form-group">
            <label class="form-label" for="slide-title-${idx}">Título em Destaque *</label>
            <input class="form-input" type="text" id="slide-title-${idx}" value="${escapeHtml(slide.title || '')}" placeholder="Centro de Operações NOC/SOC">
          </div>

          <div class="form-group full-width">
            <label class="form-label" for="slide-subtitle-${idx}">Subtítulo / Descrição Breve</label>
            <textarea class="form-textarea" id="slide-subtitle-${idx}" style="min-height:55px;">${escapeHtml(slide.subtitle || '')}</textarea>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

window.updateSlidePreviewFromInput = function(idx, val) {
  const preview = document.getElementById(`slide-preview-${idx}`);
  if (preview && val) {
    preview.src = val;
  }
};

window.handleSlideFileUpload = function(event, idx) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    const urlInput = document.getElementById(`slide-img-url-${idx}`);
    const preview = document.getElementById(`slide-preview-${idx}`);
    if (urlInput) urlInput.value = base64;
    if (preview) preview.src = base64;
    if (editingCarouselSlides[idx]) {
      editingCarouselSlides[idx].image = base64;
    }
    showToast('Imagem carregada! Clique em "Salvar Carrossel" para gravar as mudanças.');
  };
  reader.readAsDataURL(file);
};

window.setSlidePreset = function(idx, type) {
  const presets = {
    datacenter: 'assets/images/slide1-datacenter.jpg',
    software: 'assets/images/slide2-software-ai.jpg',
    cyber: 'assets/images/slide3-cybersecurity.jpg'
  };
  const url = presets[type];
  if (url) {
    const urlInput = document.getElementById(`slide-img-url-${idx}`);
    const preview = document.getElementById(`slide-preview-${idx}`);
    if (urlInput) urlInput.value = url;
    if (preview) preview.src = url;
    if (editingCarouselSlides[idx]) {
      editingCarouselSlides[idx].image = url;
    }
    showToast(`Preset corporativo "${type}" aplicado!`);
  }
};

window.addNewCarouselSlide = function() {
  collectCurrentCarouselEditorInputs();

  editingCarouselSlides.push({
    id: 'slide-' + Date.now(),
    image: 'assets/images/slide1-datacenter.jpg',
    badge: 'DASH SOLUTIONS',
    title: 'Nova Solução Tecnológica',
    subtitle: 'Infraestrutura e engenharia avançada de tecnologia corporativa.'
  });

  renderCarouselEditorList();
  showToast('Novo slide adicionado! Personalize a imagem e o texto.');
};

window.removeCarouselSlide = function(idx) {
  if (editingCarouselSlides.length <= 1) {
    showToast('O carrossel precisa ter no mínimo 1 slide.');
    return;
  }
  collectCurrentCarouselEditorInputs();
  editingCarouselSlides.splice(idx, 1);
  renderCarouselEditorList();
  showToast('Slide removido.');
};

function collectCurrentCarouselEditorInputs() {
  editingCarouselSlides.forEach((slide, idx) => {
    const url = document.getElementById(`slide-img-url-${idx}`)?.value.trim();
    const badge = document.getElementById(`slide-badge-${idx}`)?.value.trim();
    const title = document.getElementById(`slide-title-${idx}`)?.value.trim();
    const subtitle = document.getElementById(`slide-subtitle-${idx}`)?.value.trim();

    if (url !== undefined) slide.image = url || slide.image;
    if (badge !== undefined) slide.badge = badge;
    if (title !== undefined) slide.title = title;
    if (subtitle !== undefined) slide.subtitle = subtitle;
  });
}

function saveCarouselFromForm() {
  collectCurrentCarouselEditorInputs();

  if (editingCarouselSlides.length === 0) {
    showToast('Adicione pelo menos um slide ao carrossel.');
    return;
  }

  siteContent.heroCarousel = JSON.parse(JSON.stringify(editingCarouselSlides));
  localStorage.setItem('dash_site_content', JSON.stringify(siteContent));

  currentCarouselIndex = 0;
  renderHeroCarousel();
  closeHeroCarouselEditorModal();
  showToast('Carrossel de imagens atualizado com sucesso!');
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   CRUD DE CARDS DO PORTFÓLIO
   ========================================================================== */
let editingCardId = null;

function renderCMSPortfolioTable() {
  const tbody = document.getElementById('cms-portfolio-table-body');
  if (!tbody) return;

  tbody.innerHTML = portfolioServices.map(item => `
    <tr>
      <td><strong>${escapeHtml(item.title)}</strong></td>
      <td><span class="card-category-badge">${escapeHtml(item.categoryLabel)}</span></td>
      <td style="color:var(--text-muted); font-size:0.8rem;">${escapeHtml(item.technologies.slice(0, 3).join(', '))}...</td>
      <td style="text-align:right;">
        <button class="card-admin-btn" onclick="openCardEditorModal('${item.id}')">Editar</button>
        <button class="card-admin-btn danger" onclick="deleteService('${item.id}')">Excluir</button>
      </td>
    </tr>
  `).join('');
}

window.openCardEditorModal = function(cardId) {
  closeAdminDrawer();
  editingCardId = cardId;
  const modal = document.getElementById('card-editor-modal');
  const titleEl = document.getElementById('card-editor-modal-title');
  const form = document.getElementById('card-editor-form');

  if (cardId) {
    const card = portfolioServices.find(s => s.id === cardId);
    if (!card) return;
    titleEl.textContent = "Editar Solução: " + card.title;
    document.getElementById('edit-card-title').value = card.title;
    document.getElementById('edit-card-category').value = card.category;
    document.getElementById('edit-card-shortdesc').value = card.shortDesc;
    document.getElementById('edit-card-longdesc').value = card.longDesc;
    document.getElementById('edit-card-features').value = card.keyFeatures.join('\n');
    document.getElementById('edit-card-deliverables').value = card.deliverables.join('\n');
    document.getElementById('edit-card-techs').value = card.technologies.join(', ');
  } else {
    titleEl.textContent = "Adicionar Nova Solução ao Portfólio";
    form.reset();
  }

  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCardEditorModal = function() {
  const modal = document.getElementById('card-editor-modal');
  modal?.classList.remove('active');
  document.body.style.overflow = '';
};

function saveCardFromForm() {
  const title = document.getElementById('edit-card-title').value.trim();
  const category = document.getElementById('edit-card-category').value;
  const shortDesc = document.getElementById('edit-card-shortdesc').value.trim();
  const longDesc = document.getElementById('edit-card-longdesc').value.trim();
  const features = document.getElementById('edit-card-features').value
    .split('\n').map(s => s.trim()).filter(Boolean);
  const deliverables = document.getElementById('edit-card-deliverables').value
    .split('\n').map(s => s.trim()).filter(Boolean);
  const techs = document.getElementById('edit-card-techs').value
    .split(',').map(s => s.trim()).filter(Boolean);

  const categoryMap = {
    "software-ia": "Software & IA",
    "infra-nuvem": "Infraestrutura & Nuvem",
    "seguranca": "Segurança & Continuidade",
    "governanca": "Governança & Gestão"
  };

  const defaultIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  if (editingCardId) {
    const idx = portfolioServices.findIndex(s => s.id === editingCardId);
    if (idx !== -1) {
      portfolioServices[idx] = {
        ...portfolioServices[idx],
        title,
        category,
        categoryLabel: categoryMap[category] || "Solução",
        shortDesc,
        longDesc,
        keyFeatures: features.length ? features : ["Serviço personalizado Dash Solutions"],
        deliverables: deliverables.length ? deliverables : ["Escopo sob medida"],
        technologies: techs.length ? techs : ["Cloud", "Security"]
      };
      showToast('Solução atualizada com sucesso!');
    }
  } else {
    const newId = "custom-" + Date.now();
    portfolioServices.unshift({
      id: newId,
      category,
      categoryLabel: categoryMap[category] || "Solução",
      title,
      shortDesc,
      longDesc: longDesc || shortDesc,
      keyFeatures: features.length ? features : ["Serviço personalizado Dash Solutions"],
      deliverables: deliverables.length ? deliverables : ["Escopo sob medida"],
      technologies: techs.length ? techs : ["Cloud", "Security"],
      icon: defaultIcon
    });
    showToast('Nova solução adicionada ao portfólio!');
  }

  localStorage.setItem('dash_portfolio_services', JSON.stringify(portfolioServices));
  closeCardEditorModal();
  renderPortfolioCards();
  renderCMSPortfolioTable();
  populateContactServiceCheckboxes();
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
}

window.deleteService = function(cardId) {
  const card = portfolioServices.find(s => s.id === cardId);
  if (!card) return;

  if (confirm(`Tem certeza que deseja excluir a solução "${card.title}" do site?`)) {
    portfolioServices = portfolioServices.filter(s => s.id !== cardId);
    localStorage.setItem('dash_portfolio_services', JSON.stringify(portfolioServices));
    showToast(`Solução "${card.title}" removida.`);
    renderPortfolioCards();
    renderCMSPortfolioTable();
    populateContactServiceCheckboxes();
  }
};

function resetToFactoryDefaults() {
  if (confirm("Deseja restaurar todos os serviços originais, métricas, textos e paleta de cores padrão do site?")) {
    portfolioServices = JSON.parse(JSON.stringify(defaultPortfolioServices));
    siteContent = JSON.parse(JSON.stringify(defaultSiteContent));
    localStorage.removeItem('dash_portfolio_services');
    localStorage.removeItem('dash_site_content');

    // Restaura e persiste as cores padrão no DOM, localStorage e servidor (theme.json)
    commitAndPersistTheme(defaultSiteContent.theme);

    renderBrandLogo();
    renderStatsSection();
    renderAboutSection();
    renderFrameworkSection();
    renderHeroCarousel();
    applyGeneralTextsToDOM();
    renderPortfolioCards();
    renderCMSPortfolioTable();
    populateContactServiceCheckboxes();
    showToast('Site e paleta de cores restaurados para as configurações padrão!');
    closeAdminDrawer();
  }
}

function exportBackupJSON() {
  const currentTheme = getActiveTheme();
  const themePayload = {
    preset: currentTheme.preset || "custom",
    name: currentTheme.name || (THEME_PRESETS.find(p => p.id === currentTheme.preset)?.name || "Personalizada"),
    primaryColor: currentTheme.primaryColor,
    secondaryColor: currentTheme.secondaryColor,
    darkAccent: currentTheme.darkAccent,
    bgMain: currentTheme.bgMain,
    bgDeep: currentTheme.bgDeep,
    bgSurface: currentTheme.bgSurface,
    updatedAt: new Date().toISOString()
  };

  const backupData = {
    version: "2.1",
    date: new Date().toISOString(),
    theme: themePayload,
    siteContent: {
      ...siteContent,
      theme: themePayload
    },
    portfolioServices
  };

  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dash-solutions-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('💾 Backup exportado com sucesso (incluindo cores e identidade visual)!');
}

function importBackupJSON(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (!data || typeof data !== 'object') {
        throw new Error("Arquivo não contém um objeto JSON válido.");
      }

      // 1. Extração e Aplicação Imediata de Cores / Tema
      const importedTheme = data.theme || (data.siteContent && data.siteContent.theme);
      if (importedTheme && importedTheme.primaryColor) {
        commitAndPersistTheme(importedTheme);
      }

      // 2. Importação do Portfólio (Serviços e Soluções)
      if (data.portfolioServices && Array.isArray(data.portfolioServices)) {
        portfolioServices = data.portfolioServices;
        localStorage.setItem('dash_portfolio_services', JSON.stringify(portfolioServices));
      }

      // 3. Importação do Conteúdo Geral do Site
      if (data.siteContent) {
        siteContent = {
          ...defaultSiteContent,
          ...data.siteContent,
          theme: importedTheme && importedTheme.primaryColor ? { ...defaultSiteContent.theme, ...importedTheme } : (siteContent.theme || defaultSiteContent.theme)
        };
        localStorage.setItem('dash_site_content', JSON.stringify(siteContent));
        renderBrandLogo();
        renderStatsSection();
        renderAboutSection();
        renderFrameworkSection();
        renderHeroCarousel();
        applyGeneralTextsToDOM();
      }

      // 4. Confirmação da aplicação das cores importadas
      if (importedTheme && importedTheme.primaryColor) {
        commitAndPersistTheme(siteContent.theme);
      }

      // 5. Atualização visual do portfólio
      renderPortfolioCards();
      renderCMSPortfolioTable();
      populateContactServiceCheckboxes();

      // Limpa o input para permitir selecionar o mesmo arquivo novamente
      e.target.value = '';

      showToast('🎉 Backup importado com sucesso! Cores, serviços e conteúdos restaurados.');
      closeAdminDrawer();
    } catch (err) {
      console.error("Erro ao importar backup:", err);
      alert("Arquivo de backup inválido: " + err.message);
      e.target.value = '';
    }
  };
  reader.readAsText(file);
}

/* ==========================================================================
   PORTFOLIO RENDERING & FILTERING
   ========================================================================== */
let currentCategory = 'all';
let currentSearchTerm = '';

function renderPortfolioCards() {
  const grid = document.getElementById('solutions-grid');
  if (!grid) return;

  const filtered = portfolioServices.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const term = currentSearchTerm.toLowerCase().trim();
    const matchesSearch = !term || 
      item.title.toLowerCase().includes(term) ||
      item.shortDesc.toLowerCase().includes(term) ||
      item.technologies.some(tech => tech.toLowerCase().includes(term)) ||
      item.categoryLabel.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  let html = '';

  // Se o admin estiver ativo, renderiza o card especial de adicionar no topo
  if (isUserAdmin() && currentCategory === 'all' && !currentSearchTerm) {
    html += `
      <div class="add-new-card-cta" onclick="openCardEditorModal(null)">
        <div class="icon-plus">+</div>
        <h3 style="font-size:1.25rem; color:#FFFFFF; margin-bottom:8px;">Adicionar Nova Solução</h3>
        <p style="font-size:0.875rem; color:var(--text-muted);">Clique aqui para incluir um novo item no portfólio</p>
      </div>
    `;
  }

  if (filtered.length === 0 && !isUserAdmin()) {
    grid.innerHTML = `
      <div class="no-results-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B9915B" stroke-width="2" style="margin-bottom:16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>Nenhuma solução encontrada</h3>
        <p style="color:var(--text-muted); max-width:400px; margin:0 auto 20px;">
          Não encontramos serviços correspondentes a "<strong>${escapeHtml(currentSearchTerm)}</strong>".
        </p>
        <button class="btn btn-outline-gold btn-sm" onclick="resetFilters()">Limpar Filtros e Busca</button>
      </div>
    `;
    return;
  }

  html += filtered.map(item => `
    <article class="solution-card" data-id="${item.id}" data-category="${item.category}">
      <div class="card-admin-bar">
        <button class="card-admin-btn" onclick="openCardEditorModal('${item.id}')" title="Editar Solução">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          Editar
        </button>
        <button class="card-admin-btn danger" onclick="deleteService('${item.id}')" title="Excluir do Site">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>

      <div class="card-top">
        <div class="card-meta">
          <div class="card-icon-box">
            ${item.icon || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`}
          </div>
          <span class="card-category-badge">${item.categoryLabel}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.shortDesc}</p>
        <ul class="card-features-list">
          ${item.keyFeatures.map(feat => `
            <li class="card-feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="card-bottom">
        <button class="btn btn-secondary card-action-btn" onclick="openServiceModal('${item.id}')">
          <span>Ver Detalhes do Escopo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');

  grid.innerHTML = html;
}

function initPortfolioFilters() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category || 'all';
      renderPortfolioCards();
    });
  });
}

function initPortfolioSearch() {
  const searchInput = document.getElementById('search-solutions');
  searchInput?.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    renderPortfolioCards();
  });
}

window.resetFilters = function() {
  currentCategory = 'all';
  currentSearchTerm = '';
  const searchInput = document.getElementById('search-solutions');
  if (searchInput) searchInput.value = '';
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(c => {
    if (c.dataset.category === 'all') c.classList.add('active');
    else c.classList.remove('active');
  });
  renderPortfolioCards();
};

/* ==========================================================================
   MODAL INTERATIVO (DETALHES DO SERVIÇO)
   ========================================================================== */
function initModalEvents() {
  const overlay = document.getElementById('service-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn?.addEventListener('click', closeServiceModal);
  
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeServiceModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      closeCardEditorModal();
      closeMetricsEditorModal();
      closeAboutEditorModal();
      closeAdminDrawer();
      closeAdminLoginModal();
    }
  });
}

window.openServiceModal = function(serviceId) {
  const service = portfolioServices.find(s => s.id === serviceId);
  if (!service) return;

  const overlay = document.getElementById('service-modal-overlay');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const deliverablesList = document.getElementById('modal-deliverables-list');
  const modalTechs = document.getElementById('modal-techs');
  const selectServiceBtn = document.getElementById('modal-select-service-btn');

  if (modalBadge) modalBadge.textContent = service.categoryLabel;
  if (modalTitle) modalTitle.textContent = service.title;
  if (modalDesc) modalDesc.textContent = service.longDesc;

  if (deliverablesList) {
    deliverablesList.innerHTML = service.deliverables.map(deliv => `
      <li class="modal-deliverable-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${deliv}</span>
      </li>
    `).join('');
  }

  if (modalTechs) {
    modalTechs.innerHTML = service.technologies.map(tech => `
      <span class="modal-tech-tag">${tech}</span>
    `).join('');
  }

  if (selectServiceBtn) {
    selectServiceBtn.onclick = () => {
      closeServiceModal();
      selectServiceInContactForm(service.id);
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    };
  }

  overlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeServiceModal() {
  const overlay = document.getElementById('service-modal-overlay');
  overlay?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   CONTACT FORM & CHECKBOXES
   ========================================================================== */
function populateContactServiceCheckboxes() {
  const container = document.getElementById('contact-service-checkboxes');
  if (!container) return;

  container.innerHTML = portfolioServices.map(item => `
    <label class="checkbox-item" for="chk-${item.id}">
      <input type="checkbox" id="chk-${item.id}" name="services" value="${item.title}">
      <span>${item.title}</span>
    </label>
  `).join('');
}

function selectServiceInContactForm(serviceId) {
  const checkbox = document.getElementById(`chk-${serviceId}`);
  if (checkbox) {
    checkbox.checked = true;
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Enviando solicitação...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast('Solicitação recebida com sucesso! Nossa equipe entrará em contato em breve.');
      form.reset();
    }, 1200);
  });
}

/* ==========================================================================
   NAVBAR & UTILS
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const indicator = document.getElementById('nav-indicator');

  let isScrollSpyLocked = false;
  let isScrollTicking = false;

  // Função para posicionar o indicador deslizante no link especificado
  function moveIndicatorTo(link, smooth = true) {
    if (!indicator || !navMenu || !link) return;

    // Se estiver em modo mobile (menu empilhado verticalmente), oculta o indicador deslizante
    if (window.innerWidth <= 992) {
      indicator.style.opacity = '0';
      return;
    }

    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const left = linkRect.left - menuRect.left;
    const width = linkRect.width;

    if (!smooth) {
      indicator.style.transition = 'none';
    } else {
      indicator.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), width 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease';
    }

    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = '1';

    if (!smooth) {
      indicator.offsetHeight; // Força repaint
      indicator.style.transition = '';
    }
  }

  // Define qual link do menu está ativo
  function setActiveLink(targetId, moveIndicator = true) {
    let matchedLink = null;
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
        matchedLink = link;
      } else {
        link.classList.remove('active');
      }
    });

    if (matchedLink && moveIndicator) {
      moveIndicatorTo(matchedLink, true);
    }
  }

  // Mapeamento das seções físicas do DOM para os IDs do menu
  const sectionsToWatch = [
    { elId: 'home', navId: 'home' },
    { elId: 'portfolio', navId: 'portfolio' },
    { elId: 'sobre', navId: 'sobre' },
    { elId: 'metodologia', navId: 'sobre' }, // A esteira metodológica faz parte da experiência Sobre Nós
    { elId: 'contato', navId: 'contato' }
  ];

  // ScrollSpy: detecta qual seção está em foco na tela
  function handleScrollSpy() {
    if (isScrollSpyLocked) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const headerHeight = header ? header.offsetHeight : 75;

    // 1. Checa se o usuário chegou próximo ao rodapé da página (ativa Contato)
    if (windowHeight + scrollY >= docHeight - 80) {
      setActiveLink('contato');
      return;
    }

    // 2. Se o usuário estiver no topo absoluto, ativa Home
    if (scrollY < 120) {
      setActiveLink('home');
      return;
    }

    // 3. Linha de foco de leitura logo abaixo do cabeçalho fixo
    const focusLine = scrollY + headerHeight + 120;

    let currentNavId = 'home';
    for (const item of sectionsToWatch) {
      const sectionEl = document.getElementById(item.elId);
      if (sectionEl) {
        const top = sectionEl.offsetTop;
        if (top <= focusLine) {
          currentNavId = item.navId;
        }
      }
    }

    setActiveLink(currentNavId);
  }

  // Listener de scroll otimizado com requestAnimationFrame
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }

    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        handleScrollSpy();
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }, { passive: true });

  // Botão flutuante "Voltar ao Topo"
  scrollTopBtn?.addEventListener('click', () => {
    isScrollSpyLocked = true;
    setActiveLink('home', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      isScrollSpyLocked = false;
      handleScrollSpy();
    }, 800);
  });

  // Clique na Logo do Topo (rola suave para Home)
  document.getElementById('header-brand-logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    isScrollSpyLocked = true;
    setActiveLink('home', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      isScrollSpyLocked = false;
      handleScrollSpy();
    }, 800);
  });

  // Clique nos Links do Menu com rolagem suave e posicionamento instantâneo
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          isScrollSpyLocked = true;
          setActiveLink(targetId, true);

          const headerHeight = header ? header.offsetHeight : 75;
          const targetY = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight + 5;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });

          setTimeout(() => {
            isScrollSpyLocked = false;
            handleScrollSpy();
          }, 850);
        }
      }
    });

    // Hover interativo: o indicador desliza suavemente até o item apontado pelo mouse
    link.addEventListener('mouseenter', () => {
      if (window.innerWidth > 992) {
        moveIndicatorTo(link, true);
      }
    });
  });

  // Ao remover o mouse do menu, o indicador retorna suavemente para a seção ativa atual
  navMenu?.addEventListener('mouseleave', () => {
    if (window.innerWidth > 992) {
      const activeLink = document.querySelector('.nav-menu .nav-link.active');
      if (activeLink) {
        moveIndicatorTo(activeLink, true);
      }
    }
  });

  // Recalcula as posições do indicador em redimensionamentos de tela
  window.addEventListener('resize', () => {
    const activeLink = document.querySelector('.nav-menu .nav-link.active');
    if (activeLink) {
      moveIndicatorTo(activeLink, false);
    }
  });

  // Inicializa o indicador após o carregamento inicial
  setTimeout(() => {
    handleScrollSpy();
    const activeLink = document.querySelector('.nav-menu .nav-link.active');
    if (activeLink) {
      moveIndicatorTo(activeLink, false);
    }
  }, 100);

  // Recalcula após o carregamento das fontes do navegador
  if (document.fonts) {
    document.fonts.ready.then(() => {
      const activeLink = document.querySelector('.nav-menu .nav-link.active');
      if (activeLink) {
        moveIndicatorTo(activeLink, false);
      }
    });
  }
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  toggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B9915B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
