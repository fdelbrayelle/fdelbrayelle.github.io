---
layout: clean
title: "François Delbrayelle — CV"
description: "Staff Software Engineer. Lead Software Engineer at Kestra. 15+ years in Java, cloud-native architecture, and open-source. Grew Kestra plugin ecosystem from 600 to 1,100+ plugins (+83%) in 8 months. 6,600+ GitHub contributions. GCP Professional Cloud Architect certified."
lang: en
permalink: /cv/
---

# François Delbrayelle

**Staff Software Engineer**

- GitHub: [github.com/fdelbrayelle](https://github.com/fdelbrayelle)
- LinkedIn: [linkedin.com/in/fdelbrayelle](https://www.linkedin.com/in/fdelbrayelle)
- Twitter/X: [@fdelbrayelle](https://twitter.com/fdelbrayelle)
- Full CV (FR): [fdelbrayelle.github.io/fr/cv/](https://fdelbrayelle.github.io/fr/cv/)
- Main site: [fdelbrayelle.github.io](https://fdelbrayelle.github.io)

---

## Summary

Full-stack engineer and technical leader with 15+ years of experience in Java ecosystem, cloud-native architecture, microservices, and open-source software. Currently serving as Lead Software Engineer at [Kestra](https://kestra.io), leading the Plugins/Integrations team for an open-source workflow orchestration platform. Deep expertise in Java 21+, Micronaut, Kubernetes, Kafka, GCP, and Vue.js. Fluent in French (native), English (C1), Japanese (JLPT N2), and Georgian (A2/B1). Passionate about developer experience, software craftsmanship, and AI-assisted engineering.

---

## Certifications

- [GCP Professional Cloud Architect](https://cloud.google.com/certification/cloud-architect) — [Credential](https://www.credential.net/5aa5d083-f600-4b98-b51b-5771a7ad5878?key=91213c5cc024a76c2b2c6b7746f8e17bcedc825c2014f7806da6d40d68593d76)
- [GCP Associate Cloud Engineer](https://cloud.google.com/certification/cloud-engineer) — [Credential](https://www.credential.net/0174e9d2-01e0-4a0f-ba14-09e422afbb8b?key=8f5de6e92912aa8a99a313d766af4a279615f0f3acd4ea48c23189c2765aa41e)
- TOEIC 840 (English, 2011)
- Japanese Language Proficiency Test N2 / JLPT N2 (2014)
- Kanji Kentei Level 5 (2010)

---

## Experience

### Kestra — Lead Software Engineer
**May 2025 – present | Remote**
[kestra.io](https://kestra.io) — Open-source workflow orchestration and automation platform. Team of ~30. 30+ enterprise customers, millions of workflows/month.

**Team:** Plugins / Integrations

**Key achievements:**

- Maintained [150+ plugin repositories](https://github.com/orgs/kestra-io/repositories?q=plugin) (storages, secret managers, OSS & EE)
- Grew [plugin ecosystem from 600 to 1,100+](https://kestra.io/plugins) in 8 months (+83%)
- Created plugins from scratch: [Mistral](https://github.com/kestra-io/plugin-mistral/pull/1), [Deepseek](https://github.com/kestra-io/plugin-deepseek/pull/2), [Beam](https://github.com/kestra-io/plugin-beam/pull/5), [Bluesky](https://github.com/kestra-io/plugin-bluesky/pull/3), VMware EE, SAP EE, 1Password (private repos)
- [6,600+ GitHub contributions](https://github.com/search?q=author%3Afdelbrayelle+org%3Akestra-io&type=pullrequests) across the Kestra org
- Stabilized critical plugins (JDBC, Git, FS, Serdes); reduced Kubernetes EE test suite from 2h15 to 15 min
- Added/fixed hundreds of tests; introduced daily CI pipeline against kestra:develop
- Shipped [NamespaceSync](https://github.com/kestra-io/plugin-git/pull/177) & [TenantSync](https://github.com/kestra-io/plugin-git/pull/180) for Git Sync (OSS & EE)
- Co-designed Plugin Metadata & Releases API architecture; drove performance improvements
- Implemented continuous automated releases across 1,100+ plugins
- Broad community support: hundreds of issues tackled (Hacktoberfest, regular events, Pylon tickets)
- Structured Plugins team: priorities, dashboards, workload split, mentoring, onboarding docs
- Led AI adoption: co-authored AI Coding Agent Guidelines, built Engineering AI Hub, integrated MCP for plugins & blueprints
- Conferences: DevLille 2025 & 2026 (talk: Kestra, plugins & AI agents), [Big Data London 2025](https://bigdataldn.com), Data Days Lille 2026
- DevRel: videos (Python/Go/JS SDK, Gemini/Ollama/OpenAI/Salesforce/VMware plugins), [blog posts](https://kestra.io/blogs), LinkedIn posts
- Contributed to hiring 3 engineers; built partnerships (Conapi GmbH, WeScale)

**Stack:** Java 21+, Micronaut, Gradle, Vue 3, Nuxt 3, Kafka, Elasticsearch, Kubernetes, Docker, GCP, PostgreSQL, GitHub Actions, ArgoCD, Terraform, Grafana

---

### Malt — Senior / Lead Software Engineer
**October 2022 – May 2025 | Remote**
[malt.fr](https://www.malt.fr) — European freelance marketplace. 700,000+ freelancers, 350,000+ client companies.

**Tribe Transaction — Squad Project (10 months)**
- Major technical migration of [freelance quotes domain](https://www.youtube.com/watch?v=2ug1T0_ZDyA) from JSP/HBS/JS/Vue 2 to Vue 3/Nuxt 3 + new APIs and domain
- Migration of post-mission freelance recommendation domain from legacy stack to Vue 3/Nuxt 3
- Introduced new team rituals: demos, daily syncs, JIRA templates, QA tracking docs

**Tribe Staffing — Squad Matching (21 months)**
- [New project funnel for Malt Strategy](https://www.malt.fr/c/maltstrategy/companies?source_component=hero-strategy) following Comatch acquisition
- Rebuilt project start date / duration management
- Migration of freelancer search from legacy JSP/HBS/JS to Vue 3/Nuxt 3; new enterprise project creation flow
- [New service level system & bypass prevention](https://help.malt.com/kb/guide/fr/les-offres-et-frais-de-service-malt-HSSbMl3qrl/Steps/2689803)
- AI-powered [advanced search](https://www.malt.fr/c/product-release) PoC with Vertex AI + QDrant (vector DB) for portfolio image matching
- Event stormings, ADRs, tech lead sync, close collaboration with PM/PD
- Member of back-end, front-end and SRE guilds
- Talk: "RGPD for developers" at Malt Tech Days 2023

**Stack:** Kotlin, Java 17+, Monorepo, Hexagonal architecture, CQRS, Spring Boot, Gradle, Vue 3, Nuxt 3, RabbitMQ, Kafka, jOOQ, Kubernetes, Docker, GCP, Testcontainers, PostgreSQL, MongoDB, Redis, Keycloak, ArgoCD, Terraform, Datadog, Grafana, GitLab CI

---

### Ippon Technologies — Full-Stack Developer / Senior Tech Lead / Solutions Architect / Trainer
**October 2019 – September 2022 | Paris / Remote**
[fr.ippon.tech](https://fr.ippon.tech) — Software consulting firm (~300 people).

Spring expert trainer (3-day sessions, internal + client Brittany Ferries). Blog editor for full-stack practice at [blog.ippon.fr](https://blog.ippon.fr). OSS contributor: [JHipster Kafka module](https://github.com/fdelbrayelle/generator-jhipster-kafka) (stream leader). Technical interviews (all levels).

**Blog posts:**
- [GCP Professional Cloud Architect cert](https://blog.ippon.fr/2022/08/03/gcp-professional-cloud-architect/)
- [IaaS nua.ge test](https://blog.ippon.fr/2022/02/25/test-du-cloud-public-iaas-de-nua-ge/)
- [Liquibase in GCP init container](https://blog.ippon.fr/2021/11/24/liquibase-dans-un-init-container-sur-gcp/)
- [JHipster OSS contribution](https://blog.ippon.fr/2021/05/31/creer-un-module-jhipster-une-facon-de-contribuer-a-lopen-source-2/)
- [Kafka + JHipster](https://blog.ippon.fr/2021/03/10/kafka-et-jhipster-cest-possible/)
- [How to improve DevX?](https://welovedevs.com/fr/articles/comment-ameliorer-lexperience-du-developpeur-devx/) (WeLoveDevs)

**Talks:**
- ["REST, gRPC, GraphQL, Webhooks"](https://github.com/fdelbrayelle/talk-rest-grpc-graphql-webhooks): [Sunny Tech 2022](https://www.youtube.com/watch?v=EajuaPWdESo), [Voxxed Days Luxembourg 2022](https://www.youtube.com/watch?v=xMTlq7PvPYU), [Touraine Tech 2022](https://www.youtube.com/watch?v=s5qRho_FIyc)
- ["RGPD for developers"](https://github.com/fdelbrayelle/talk-gdpr-for-developers): [DevFest Lille 2022](https://www.youtube.com/watch?v=wkbQ6Ec4qXY)

#### Client: Galeries Lafayette (February 2021 – September 2022, 20 months)
[galerieslafayette.com](https://www.galerieslafayette.com) — Luxury retail group, 60M+ visitors/year in 290 stores and e-commerce.

- Transverse tech lead on PIM and order tunnel; e-commerce APIs (multi-channel: web, mobile, in-store POS, vendor portal)
- Microservices (hexagonal architecture, OpenAPI design-first): Offer, Merch, Product, Asset, Cart, Delivery, Payment, Customer domains
- ADRs, UML diagrams, RICEFW/IFS/NFR for SAP Commerce Cloud replatforming
- Scrum master; code reviews; TDD, BDD, pair/mob programming; Sonar quality tracking
- Tools: Mirakl, STEP PIM, Fredhopper, Algolia, Braintree, Hybris, Cloudflare, Kafka Streams

**Stack:** Java 12/17, Kotlin, Python, Groovy, Spring Boot, Kafka (Streams + Connect), Aiven, Kubernetes, Docker, GCP, PostgreSQL, Redis, Keycloak, GraphQL, ArgoCD, Terraform, Dynatrace

#### Client: Leroy Merlin (October 2019 – February 2021, 17 months)
[leroymerlin.fr](https://www.leroymerlin.fr) — DIY & home improvement retail, international rollout.

- Lead dev on [Instala](https://instala.leroymerlin.fr) — customer job-tracking web app, deployed internationally (France + Portugal)
- Microservices creation/modification; co-built partner contractor matching architecture
- React + Storybook new frontend components; DevOps contributions (Helm charts, GitHub Actions, Terraform)
- Event stormings; DDD; weekly on-call rotation ("You build it, you run it!")

**Stack:** Java 11, Scala, Spring Boot, Quarkus, Kafka (Streams), Elasticsearch, React, Formik, Storybook, GCP, Docker, OpenShift, Kubernetes, Helm, Terraform, PostgreSQL, MongoDB Atlas, GitHub Actions

---

### Gfi Informatique (now Inetum) — Full-Stack Developer / Senior Tech Lead / Trainer
**April 2015 – October 2019 | Lille**
[gfi.world](https://www.gfi.world) (now [inetum.com](https://www.inetum.com)) — IT services, ~10,000 people.

Java EE & Spring trainer (bi-annual "Welcome" sessions). Angular / AngularJS trainer. Technical interviewer. Expert technical community member (WebSphere, Spring Batch, Docker/K8s, Angular consulting).

**Internal talks:** [Micronaut & Quarkus](https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus), [Kubernetes](https://github.com/fdelbrayelle/midi-tech-k8s), [Vue.js](https://github.com/fdelbrayelle/midi-tech-vuejs), [JHipster](https://github.com/fdelbrayelle/midi-tech-jhipster), [Post Java 8](https://github.com/fdelbrayelle/midi-tech-java-news)

#### Client: BNP Leasing Solutions (April 2018 – September 2019, 18 months)
Banking apps (PAF supplier platform, KYC intranet, GDPR compliance app). Tech lead: CI/CD pipelines, JHipster blueprint for Angular 7 + Spring Boot 2, WebSSO SAML V2, Oracle.

**Stack:** Java 8/11, JHipster, Angular, AngularJS, Spring Boot, Spring Batch, ActiveMQ, TIBCO JMS, Oracle, Liquibase, IBM WebSphere Liberty Profile, Jenkins

#### Client: Société Générale (October 2017 – November 2017, 2 months)
REST API microservices (APIsation of existing services), design-first (Swagger), junior developer mentoring.

**Stack:** Java 8, Jersey, JAX-RS, JAX-WS, Netflix Hystrix, git, Jenkins

#### Client: Pacifica / Crédit Agricole (July 2017 – March 2018, ~9 months)
Insurance web apps (NewSesame: 2-wheel and 4-wheel coverage forms), Angular/AngularJS front-end.

#### Client: Lantik BFA (December 2017 – January 2018, 2 months)
Digital transformation of Spanish public sector portal (Biscay provincial government). Java/JSF, team lead for juniors. Communication in English + Spanish.

#### Client: Crédit Agricole (January 2016 – June 2017, 18 months)
Operational risk management intranet (CAROline project). Tech lead: architecture docs (DAT), STD specs, TDD, Sonar. JSF 1.2/2.0, DB2, WebSphere.

#### Client: BNP Paribas (April 2015 – December 2015, 9 months)
Multiple banking apps: corporate cards (internet + intranet), RSDD/Souscription apps, push notification server (mainframe → mobile), IVR. TMA. Cross-team knowledge transfer (English presentation to Romanian team).

**Stack:** Java EE, Struts, Tiles, WebSphere, DB2, bash, SOAP, Jenkins

---

### Norsys — Full-Stack Developer
**April 2011 – April 2015 | Ennevelin / Paris**
[norsys.fr](https://www.norsys.fr) — Ethical IT services company (~500 people).

Techno Maker training (clean code, TDD, BDD, design patterns, DevOps). Facilitator (soft skills) training.

#### Client: Décathlon (September 2013 – April 2015, 19 months)
[decathlon.fr](https://www.decathlon.fr) — Global sports retailer.

Product selection web apps for stores (FIRST project). TMA: stabilization, new features, bug fixes. Framework for transaction management. Unit test framework setup. Reference developer in support team.

**Stack:** Java, Struts, Salto, Tiles, GWT, Groovy, git, Jenkins

#### Client: CNSA (November 2012 – August 2013, 9 months)
[hapi.cnsa.fr](http://hapi.cnsa.fr) — French national solidarity fund for autonomy (health / public sector).

TMA on HAPI web app for regional health agencies (medico-social institution tarification). T-SQL procedures. 2 months on-site in Paris.

**Stack:** Java EE, Spring MVC, Hibernate, SQL Server, GNU/Linux, svn, Jenkins

#### Client: 3 Suisses (May 2012 – November 2012, 6 months)
[3suisses.fr](https://3suisses.fr) — E-commerce (mail order).

Rewrite of order tunnel (cart, promotions, delivery, payment, summary). RESTful multi-channel APIs. DDD (ubiquitous language, bounded contexts, layered architecture). Rules engine based on predicates. TDD, BDD.

**Stack:** Java EE, Spring MVC, REST, SOAP, JDBC Template, Thymeleaf, DDD, Tomcat, Weblogic, git, Jenkins

#### Client: 3 Suisses (April 2011 – May 2012, 13 months — includes 6-month end-of-studies internship)
Legacy mail-order/phone order management app (FORCE project). TMA: bug fixes and evolutions. DB2 → Oracle migration.

**Stack:** Java EE, Struts, Tiles, Salto, DB2, Oracle, Tomcat, Weblogic, svn, Jenkins

---

## Skills

**Languages:** Java 21+, Kotlin, JavaScript/TypeScript, Go (basics), Python (basics), Groovy, Scala (basics)
**Frameworks:** Micronaut, Spring Boot, Quarkus, Vue 3, Nuxt 3, Angular, React
**Data:** Kafka (Streams, Connect), Elasticsearch, PostgreSQL, MongoDB, Redis, DB2, Oracle
**Cloud & Infra:** GCP (certified), Docker, Kubernetes, ArgoCD, Terraform, Helm, GitHub Actions, GitLab CI, Jenkins
**Practices:** TDD, BDD, DDD, pair/mob programming, Software Craftsmanship, CI/CD, Event Storming, ADRs, hexagonal architecture
**AI tools:** Claude Code, GitHub Copilot, Cursor; MCP integrations; AI agent frameworks

---

## Education

- **MSc Computer Science** — SUPINFO Lille (2008–2011)
  - Internship: Sparkow (Lille, e-commerce merchandising), Odimat (Liévin, SEO/web), Norsys (final internship)
  - Mandriva Certified Administrator; Java Lab member (2008–2010)
- **DUT Informatique** — Université d'Artois / IUT de Lens (2005–2008)
  - Internship: Idea7 (Java EE asset management)
  - President of IUT Lens computer science students' association (2006–2007)
- **Baccalauréat Scientifique** — Lycée de Gondecourt (2005), specialty mathematics

---

## Languages

- French — native
- English — C1 (professional, daily use since 2022; TOEIC 840)
- Japanese — B2/C1 (JLPT N2, Kanji Kentei 5)
- Georgian — A2/B1 (regular practice)
- Spanish — A2
- German — A1

---

## Open Source

- Kestra plugins: [github.com/kestra-io](https://github.com/kestra-io) ([6,600+ contributions](https://github.com/search?q=author%3Afdelbrayelle+org%3Akestra-io&type=pullrequests))
- JHipster Kafka module: [generator-jhipster-kafka](https://github.com/fdelbrayelle/generator-jhipster-kafka) (stream leader)
- DevFest Lille 2022: CFP reviewer (no deliberation rights), community ambassador

---

*Last updated: April 2026*
