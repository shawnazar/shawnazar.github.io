import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { faFile } from '@fortawesome/free-solid-svg-icons'

import { S3Client } from '@aws-sdk/client-s3' // Import the S3Client class

export const metadata: Metadata = {
  title: 'About',
  description: 'A father, adventurer, and a general technologist.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Shawn Azar. A father, adventurer, and a general technologist.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a CloudOps Engineering Manager at Bonusly with over 13 years
              of experience in software engineering. I am passionate about
              solving problems using technology and leveraging cloud computing.
              I thrive on delivering high-quality, scalable, and secure
              solutions.
            </p>
            <p>
              I have developed a robust skillset in cloud infrastructure design,
              deployment, and management throughout my career. I love to lead
              and mentor teams of engineers in successfully delivering complex
              projects. I am a quick learner and love staying current with the
              latest trends.
            </p>
            <p>
              Why create a personal website when countless blog software and
              professional social sites exist? Why not? I also wanted a place to
              document my journeys without relying on what I already know—using
              WordPress, Medium, or another one of the content management
              systems in the sea of open-source blog platforms. Slapping a site
              together with one click install on a managed platform feels cheap
              these days and while outsourcing some of these things makes sense,
              hosting a blog has gotten boring. I wanted to try something new,
              so I'm building this website on an experimental stack I want to
              learn and play with.
            </p>
            <p>Thank you for visiting my website!</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <Link
              href="https://www.linkedin.com/in/shawnazar/"
              className="mt-4 flex gap-4"
              target="_new"
            >
              <FontAwesomeIcon icon={faLinkedin} width={20} color="gray" />
              <span>Follow me on LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/shawnazar/"
              className="mt-4 flex gap-4"
              target="_new"
            >
              <FontAwesomeIcon icon={faGithub} width={20} color="gray" />
              <span>Follow me on Github</span>
            </Link>

            <Link
              href="https://gitlab.com/cydiasa"
              className="mt-4 flex gap-4"
              target="_new"
            >
              <FontAwesomeIcon icon={faGitlab} width={20} color="gray" />
              <span>Follow me on GitLab</span>
            </Link>

            <Link
              href="https://s3.us-west-2.amazonaws.com/shawnazar.me.resume/resume-shawn-azar-12012023.pdf"
              className="mt-4 flex gap-4"
              target="_new"
            >
              <FontAwesomeIcon icon={faFile} width={20} color="gray" />
              <span>Download my Resume</span>
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  )
}
