import { useEffect } from 'react'
import { getHospitalSchema } from '../../lib/hospitalSchema.js'

/**
 * Injects site-wide Hospital JSON-LD (schema.org) structured data once.
 * Mounted at the layout level so it's present on every page.
 */
function OrganizationSchema() {
  useEffect(() => {
    const id = 'organization-structured-data'
    let tag = document.getElementById(id)
    if (!tag) {
      tag = document.createElement('script')
      tag.id = id
      tag.type = 'application/ld+json'
      document.head.appendChild(tag)
    }
    tag.textContent = JSON.stringify(getHospitalSchema())
  }, [])

  return null
}

export default OrganizationSchema
