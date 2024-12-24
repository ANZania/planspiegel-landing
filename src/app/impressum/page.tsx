import React from 'react'
import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'

const ImpressumPage = () => {
  return (
    <div className="container mx-auto p-6 md:px-24">
      <Container as="section" className="mb-12 mt-24">
        <h1 className="mb-4 text-4xl font-bold">Impressum</h1>
        <p className="text-lg">
          University Project: Planspiel Web Engineering WS24/25
        </p>
      </Container>

      <Container as="section" className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">Company Information</h2>
        <p className="text-lg">Company Name: Planspiegel</p>
        <p className="text-lg">
          Address: Vettersstrasse 52, 09126, Chemnitz, Germany
        </p>
        <p className="text-lg">Phone: +123 456 7890</p>
        <p className="text-lg"></p>
        <p className="text-lg">Contact Email: alex.levin.bizdev@gmail.com</p>
      </Container>

      <Container as="section" className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">Register Entry</h2>
        <p className="text-lg">Registration Number: Group 09</p>
        <p className="text-lg">
          Registered by: Technische Universität Chemnitz
        </p>
      </Container>

      <Container as="section" className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">Copyright</h2>
        <p className="text-lg">© 2024 Planspiegel. All rights reserved.</p>
      </Container>

      <Container as="section">
        <Disclaimer />
      </Container>
    </div>
  )
}

export default ImpressumPage
