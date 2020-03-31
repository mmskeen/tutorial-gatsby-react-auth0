// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="jeffersonian.auth0.com"
    auth0_client_id="G0qaZahPEVvt86Q18RIVIc0jtdAf0JGA"
  >
    {element}
  </AuthProvider>
)
