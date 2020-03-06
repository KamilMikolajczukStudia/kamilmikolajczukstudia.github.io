import React, { Fragment } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Header from '../Header'
import Banner from '../Banner'
import Posts from '../Posts'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '::-moz-selection': {
        backgroundColor: theme.palette.secondary.light
      },
      '::selection': {
        backgroundColor: theme.palette.secondary.light
      },

      '*': {
        scrollbarColor: `${theme.palette.grey[500]} ${theme.palette.grey[100]}`,
        scrollbarWidth: 'thin'
      },
      '::-webkit-scrollbar-track': {
        borderRadius: 2,
        backgroundColor: theme.palette.grey[200]
      },
      '::-webkit-scrollbar': {
        width: 6
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: 2,
        backgroundColor: theme.palette.grey[500]
      }
    }
  })
)

export default function Main() {
  useStyles()

  return (
    <Fragment>
      <Header />

      <Container maxWidth='lg'>
        <Banner />

        <Posts />
      </Container>
    </Fragment>
  )
}
