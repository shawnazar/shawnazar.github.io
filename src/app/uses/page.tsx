import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Office">
          <Tool title="Home Office">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Dell UltraSharp 49 Curved USB-C Hub Monitor
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Logitech MX Wireless Vertical Advanced Mouse - Graphite
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                Logitech MX Mechanical Wireless Illuminated Performance
                Keyboard, Clicky Switches
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                Logitech MX Sound 2.0 Multi Device Stereo Speakers
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                Logitech MX Master 3 Advanced Wireless Mouse
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                Logitech MX Master 2S Wireless Mouse
              </li>
            </ul>
          </Tool>
        </ToolsSection>

        <ToolsSection title="Laptops">
          <Tool title="15” Dell XPS, 9530">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Platinum Silver exterior, Black interior
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                15.6&quot;, 3.5K 3456x2160, 60Hz, OLED, Touch, Anti-Reflect, 400
                nit, InfinityEdge
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to
                5.40 GHz Turbo)
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                64GB DDR4-3200MHz, 2x32GB
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                4TB M.2 PCIe NVMe Solid State Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={6}>
                Ubuntu Desktop 22.04 LTS (Jammy Jellyfish)
              </li>
            </ul>
          </Tool>
          <Tool title="16” Apple MacBook M1 Pro (2021)">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Space Gray
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                16.2” Liquid Retina XDR display 3456-by-2234 native resolution
                at 254 pixels per inch
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                10-core CPU with 8 performance cores and 2 efficiency cores
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                32GB LPDDR5
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                500GB Solid State Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                macOS Monterey
              </li>
            </ul>
          </Tool>
          <Tool title="16” Apple MacBook Pro Core i7 (2021)">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Space Gray
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                16” 3072-by-1920
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                Intel® Core™ i7-9750H
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                16GB DDR4-2666MHz
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                500GB Solid State Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                macOS Monterey
              </li>
            </ul>
          </Tool>
        </ToolsSection>

        <ToolsSection title="Simulation Setup">
          <Tool title="Desktop">
            <ul role="list" className="space-y-3">
            <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Gigabyte X99-Phoenix-SLI
              </li><li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Intel Core i7 9th Gen - Core i7-9700K Coffee Lake 8-Core 3.6 GHz
                (4.9 GHz Turbo) LGA 1151
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                128GB DDR4-3600MHz, 4x32GB
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                4TB M.2 PCIe NVMe Solid State Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
              NVIDIA GeForce RTX 3080 OC Edition Graphics Card, 10GB GDDR6X
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={6}>
                Windows 10 Pro
              </li>
            </ul>
          </Tool>

          <Tool title="Displays">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                4 x 32&quot; UltraGear™ UHD 4K Nano IPS with ATW 1ms 144Hz HDR 1000 Monitor with G-SYNC® Compatible
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                iPad Pro 9.7&quot; (2106)
              </li>
            </ul>
          </Tool>
          <Tool title="Devices">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Moza R21 Wheel Base Racing Simulator Direct Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Moza RS V2 Steering Wheel
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                Moza GS GT Wheel
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                Moza V3 CRP Pedals
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                Moza E Stop Emergency Stop Switch
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                Moza HGP Shifter
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={6}>
                Custom 24 Button Box with Custom LED. Arduino Nano
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={7}>
                Aikeec USB Handbrake
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={7}>
                2 x Logitech G29
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={7}>
                1 x Logitech G920
              </li>
            </ul>
          </Tool>
          <Tool title="Cockpit">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Simlab triple monitor stand with quad monitor mount
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Simlab P1-X Cockpit
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                Next Level Racing F-GT
              </li>
            </ul>
          </Tool>
        </ToolsSection>

        <ToolsSection title="Home Lab">
          <Tool title="Modem">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Motorola MB8600
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Xfinity Gigabit Internet Service (1.2Gbps Down / 40Mbps Up)
              </li>
            </ul>
          </Tool>
          <Tool title="Router">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                Protectli Vault Pro VP2420-4 Port
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Intel Celeron J6412
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                2.5G Ports
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                16 DDR4 RAM
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                480GB M.2 SSD Storage
              </li>
            </ul>
          </Tool>
          <Tool title="Wifi">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                AXE5300 Tri-Band Mesh Wi-Fi 6E System (3-Pack)
              </li>
            </ul>
          </Tool>
          <Tool title="Switch">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                2 X Ubiquiti UniFi Switch USW-24-POE
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                2 X Netgear ProSafe 24-Port Gigabit Ethernet Switch
              </li>
            </ul>
          </Tool>
          <Tool title="3 X Dell PowerEdge R710">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                2 X Intel(R) Xeon(R) CPU X5675 @ 3.07GHz
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                18 X 8GB DDR3 ECC RAM (144GB Total)
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                6 X 2TB 7.2K RPM SATA 6Gbps 3.5in Hot-plug Hard Drive
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                2 X 870W Power Supply
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                1 X 10GbE NIC
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                3 X 1GbE NIC
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={6}>
                Ubuntu Server 22.04 LTS (Jammy Jellyfish)
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={7}>
                Running as three node kubernetes cluster
              </li>
            </ul>
          </Tool>

          <Tool title="Synology NAS">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                DiskStation® DS224+
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                Intel Celeron J4125
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                6 GB (2 GB + 4 GB) DDR4 non-ECC SODIMM
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                2 X Seagate IronWolf 12TB NAS Internal Hard Drive HDD – 3.5 Inch
                SATA 6Gb/s 7200 RPM 256MB Cache
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                Synology Diskstation Manager 7.3
              </li>
            </ul>
          </Tool>

          <Tool title="Stack">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden px-2 sm:rounded-md" key={0}>
                <strong>Routing</strong>: Adguard, Traefik, Cloudflare DNS,
                CloudflareD Tunnel, DDNS
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={1}>
                <strong>Orchestration</strong>: Portainer, Whats Up Docker
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={2}>
                <strong>Logging/Monitoring</strong>: Grafana, InfluxDB,
                Telegraf, Loki and Promtail
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={3}>
                <strong>Media</strong>: Radarr, Sonarr, Lidarr, Prowlarr,
                Deluge, Jellyfin and Gluetun
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={4}>
                <strong>Storage</strong>: OwnCloud
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                <strong>Home</strong>: Home Assistant, Homebridge, Mosquitto
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={5}>
                <strong>Game Servers</strong>: Minecraft, Stardew Valley
              </li>
              <li className="overflow-hidden px-2 sm:rounded-md" key={6}>
                <strong>Additional Services</strong>: Homer, FireflyIII,
                FreshRSS, Baby Buddy, WhoAMI, Wordpress, Internet Speed Test,
                Tunneled API Service for websites, Data Transmit Tool Gran
                Turismo 7, Data Transmit Tool iRacing and
                mariadb/mysql/postgresql databases
              </li>
            </ul>
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
