import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Intro = () => (
  <div className="intro">
    <h1 className="center">Hello, I am Lance</h1>
    <p className="center">I'm currently a front-end developer aspiring to become a game developer</p>
    <div className="social-about">
      <p>Follow me</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Hyokune" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hyokune" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hyuck-lee-8104a0ba" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <Link href="/resume">
            <a>
              <i className="far fa-id-badge" />
            </a>
          </Link>
        </li>
        <li>
          <a href="mailto:lleehyuck@gmail.com">
            <i className="far fa-envelope" />
          </a>
        </li>
      </ul>
    </div>
    <Image unsized src="/images/lance-alternative.png" alt="Lance alternative drawing by Kitoodles" />
  </div>
)

export default Intro
