import React from 'react'
import FeatureCard from '../shared/FeatureCard'
import { Eye, Gem, Target } from 'lucide-react'

const FeaturesSection = () => {
  return (
    <section title={'Features'} className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto justify-items-center">
          <FeatureCard
            title="Our Mission"
            icon={<Target className="w-14 h-14 text-primary" />}
            desc="To be the market leader providing integrated and sustainable facilities management solutions."
          />

          <FeatureCard
            title="Our Vision"
            icon={<Eye className="w-14 h-14 text-primary" />}
            desc="To provide high-quality integrated FM solutions through innovative ideas and technologies offering an exceptional experience to our stakeholders."
          />

          <FeatureCard
            title="Our Goals"
            icon={<Gem className="w-14 h-14 text-primary" />}
            desc="To provide high-quality integrated FM solutions through innovative ideas and technologies offering an exceptional experience to our stakeholders."
          />
        </div>
      </section>
  )
}

export default FeaturesSection