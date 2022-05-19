import Content from './how-2-make-list.mdx'

const how2makelist = () => (
    <Box
    as="footer"
    sx={{
      bg: 'sunken',
      textAlign: 'center',
      px: 2,
      py: [3, 4],
      '@media print': { display: 'none' }
    }}
  >
    <Container
      variant="narrow"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { color: 'secondary', fontSize: 2 },
        a: { variant: 'styles.a' }
      }}
    >
      <Content />
    </Container>
  </Box>
)

export default how2makelist
