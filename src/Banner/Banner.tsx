import React, { useCallback, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import sggwLogo from '../img/sggw.png'
import AboutMeDialog from './AboutMeDialog'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 24px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    image: {
      display: 'block',
      maxWidth: 256,
      marginRight: 48,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0
      }
    },
    button: {
      marginTop: 32,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    description: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(4)
      }
    }
  })
)

export default function Banner() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const openDialog = useCallback(() => setOpen(true), [])
  const closeDialog = useCallback(() => setOpen(false), [])

  return (
    <Container maxWidth='lg' classes={{ root: classes.container }}>
      <img src={sggwLogo} alt='SGGW logo' className={classes.image} />

      <div className={classes.description}>
        <Typography variant='h2'>Kamil Mikołajczuk</Typography>
        <Typography variant='subtitle1'>Budowa Serwisów interntowych</Typography>

        <Button
          variant='outlined'
          size='large'
          color='primary'
          classes={{ root: classes.button }}
          onClick={openDialog}
        >
          O mnie
        </Button>
      </div>

      <AboutMeDialog handleClose={closeDialog} open={open} />
    </Container>
  )
}
