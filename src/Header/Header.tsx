import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    }
  })
)

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' classes={{ root: classes.title }}>
          Budowa Serwisów Interntowych
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
