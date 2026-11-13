/* data.js: site content. Edit here to update CV, timeline, topology and chat answers. Load first. */

/* ---- Shared helpers ---- */
const $=s=>document.querySelector(s),el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e};
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---- CV data (single source for terminal + chat) ---- */
const CV={
 about:"Senior Network Engineer with 10+ years in Mikrotik, BGP/OSPF and secure network infrastructure, from ISP backbones to multi-building enterprise IT.",
 skills:"Networking : Mikrotik, BGP, OSPF, Cisco, Juniper, Fortigate, Unifi\nServers    : Proxmox VE, Linux (Ubuntu/Debian), Nginx, Active Directory\nMonitoring : Cacti, Telegram Bot\nCloud      : AWS, Google Workspace\nAccess/CCTV: ZKTeco, door locks, CCTV",
 exp:"[2024-now ] Senior IT Officer @ Selaras Group (3 buildings)\n[2022-now ] Senior Network Engineer @ Caraka Citra Sekar Lestari\n[2018-2022] Senior Network Engineer @ COHIVE (31 facilities)\n[2013-2018] Senior Network Provisioning @ Varnion (FULL BGP)",
 certs:"MTCRE - MikroTik Certified Routing Engineer\nMTCNA - MikroTik Certified Network Associate\nNSE 2  - Fortinet Network Security Expert",
 projects:"coworking-aaa-radius\n  RADIUS app for Wi-Fi authentication (AAA) in a coworking space.\nzero-complaint-routing\n  2 routers + 2 ISPs, routing protocols and port aggregation.",
 contact:"Email    : ferdinan@gmail.com\nLinkedIn : linkedin.com/in/ferdinan\nLocation : Citayam, Kabupaten Bogor"
};

/* ---- Career timeline roles ---- */
const ROLES=[['Varnion',2013,2018,2,'ISP backbone, FULL BGP'],['COHIVE',2018,2022,3,'31 facilities from scratch'],['Caraka CSL',2022,2026,3,'Cloud to on-prem migration'],['Selaras',2024,2026,4,'3-building IT operations']];

/* ---- Topology nodes and links ---- */
const NODES=[
 {id:'iix',t:'IIX',x:.12,y:.14,d:'Upstream peering at the Indonesia Internet Exchange.'},
 {id:'opx',t:'OPIXP',x:.12,y:.38,d:'Upstream peering via OPIXP.'},
 {id:'sg',t:'Sing IX',x:.12,y:.62,d:'International upstream via Singapore IX.'},
 {id:'gc',t:'Google Cache',x:.12,y:.86,d:'Google Global Cache to cut upstream traffic.'},
 {id:'core',t:'FULL BGP core',x:.46,y:.5,r:9,d:'Varnion, 2013-2018. CE, PE to core, link aggregation and traffic engineering.'},
 {id:'coh',t:'COHIVE x31',x:.84,y:.16,d:'COHIVE, 2018-2022. 31 facilities with topology, CCTV, APs, door locks and Telegram Bot monitoring.'},
 {id:'car',t:'Caraka CSL',x:.84,y:.5,d:'Since 2022. Cloud to on-prem migration: AD, Cacti, Nginx proxy, Elastix PBX, Proxmox.'},
 {id:'sel',t:'Selaras x3',x:.84,y:.84,d:'Since 2024. Prudential, AIA and Caraka buildings, Proxmox and digitalization projects.'}
];
const EDGES=[['iix','core'],['opx','core'],['sg','core'],['gc','core'],['core','coh'],['core','car'],['core','sel']];

/* ---- Ask NOC answers ---- */
const KB=[
 [/\b(hi|hello|hai|halo)\b/,"Hello! Ask me about BGP, Mikrotik, Proxmox, certifications or projects."],
 [/bgp|ospf|routing|peering|isp|upstream/,"At Varnion (2013-2018) Ferdinan implemented FULL BGP route (CE, PE to core), managed upstreams such as IIX, OPIXP, Sing IX and Google Cache, and optimized routing with link aggregation and traffic engineering."],
 [/mikrotik|mtcre|mtcna/,"Mikrotik is his main platform. He holds MTCRE and MTCNA and uses it for routing, firewalling and port aggregation, from ISP work to 31 coworking facilities."],
 [/cert|nse|fortinet/,"Certifications: MTCRE, MTCNA (MikroTik) and NSE 2 (Fortinet)."],
 [/proxmox|server|virtual|backup|linux/,"At Selaras Group he oversees Proxmox virtualization, VM operations and backups for three buildings. At Caraka he migrated servers from cloud to on-prem (AD, Cacti, Nginx proxy, Elastix PBX)."],
 [/cctv|access|door|zkteco|wifi|wi-fi|unifi/,"He has designed and run CCTV, access control (ZKTeco), door locks and Wi-Fi (Unifi) for 31 COHIVE facilities and the buildings he manages today."],
 [/monitor|cacti|telegram/,"Monitoring uses Cacti plus a Telegram Bot he built at COHIVE to alert on core system issues."],
 [/radius|aaa|project|repo/,"Projects: coworking-aaa-radius (RADIUS Wi-Fi authentication for coworking spaces) and zero-complaint-routing (2 routers, 2 ISPs, routing protocol plus port aggregation)."],
 [/experience|work|career|job|years/,"10+ years: Senior IT Officer at Selaras Group (2024-now), Senior Network Engineer at Caraka Citra Sekar Lestari (2022-now) and COHIVE (2018-2022), Senior Network Provisioning at Varnion (2013-2018)."],
 [/contact|email|reach|hire|linkedin|where|location|bogor/,"Based in Citayam, Kabupaten Bogor. Email: ferdinan@gmail.com."]
];
