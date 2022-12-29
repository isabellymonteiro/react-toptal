import { Page, Container, Typography, Code16, Table } from "@toptal/picasso"
import { data } from '../database'

const TaskOne = () => {
 return (
    <Page>
        <Page.TopBar title='Top heroes' />
        <Page.Content>
          <Container flex gap='xlarge' alignItems='flex-start'>
            <FirstBox />
            <SecondBox />
          </Container>
        </Page.Content>
    </Page>
 )
}

const FirstBox = () => {
  return (
    <Container bordered rounded padded='medium' top='small'>
      <Container bordered rounded padded='medium' top='small' bottom='small'>

        <Typography variant='heading' size='xlarge' as='h2'>Box 1 title</Typography>
        <Container flex gap='xsmall' alignItems='center' bottom='medium'>
          <Code16 />
          <Typography color='green'>Hover over the icon for more info</Typography>
        </Container>

        <Typography weight='semibold' color='black'>
          This is the content for the first box. It should be aligned to the left
        </Typography>
        <Typography color='grey-main-2'>
          We'll add a form here soon
        </Typography> 

      </Container>
    </Container>
  )
}

const SecondBox = () => {
  return (
    <Container bordered rounded padded='medium' top='small'>

      <Typography variant='heading' size='xlarge' as='h2'>Heroes</Typography>

      <Table variant='striped'>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Hero</Table.Cell>
            <Table.Cell>Cape</Table.Cell>
            <Table.Cell>Universe</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(row => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.hero}</Table.Cell>
              <Table.Cell>{row.cape}</Table.Cell>
              <Table.Cell>{row.universe}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total</Table.Cell>
            <Table.Cell>{data.length}</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      
    </Container>
  )
}

export default TaskOne