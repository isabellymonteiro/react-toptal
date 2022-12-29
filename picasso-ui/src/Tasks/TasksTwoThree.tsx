import { Page, Container, Typography, Table } from '@toptal/picasso'
import { Form } from '@toptal/picasso-forms'
import { useState } from 'react';
import { data } from '../database'

interface Hero {
  name: string
  hero: string
  cape: 'Yes' | 'No'
  universe?: 'Marvel' | 'DC' | undefined
}

interface CreateHeroProps {
  handleSubmit: (values: Hero) => void
  validateName: (value: string) => string | undefined
}

const TasksTwoThree = () => {
  const [heroes, setHeroes] = useState<Hero[]>(data as Hero[])

  const handleSubmit = (values: Hero) => {
    const newHero = { ...values }

    setHeroes(prevHeroes => [ ...prevHeroes, newHero ])
  }

  const validateName = (value: string) => {
    const existingName = heroes.find(hero => hero.hero.toLowerCase() === value.toLowerCase())

    if (existingName) return 'Hero name already exists'

    return undefined
  }

 return (
    <Page>
      <Page.TopBar title='Top heroes' />
      <Page.Content flex>
        <Container 
          flex
          gap='xlarge'
          style={{ width: '100%'}}
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <CreateHero handleSubmit={handleSubmit} validateName={validateName} />
          <HeroesTable heroes={heroes} />
        </Container>
      </Page.Content>
    </Page>
 )
}

const CreateHero = ({ handleSubmit, validateName }: CreateHeroProps )=> {
  return (
    
    <Container bordered rounded padded='medium' top='small' bottom='small'>
      <Container bottom='small'>
        <Typography variant='heading' size='xlarge' as='h2'>Create a new hero</Typography>
      </Container>
      
      <Form onSubmit={(values: Hero) => handleSubmit(values)}>
        <Form.Input
          required
          name='name'
          label='Original Name'
          placeholder='Type the secret identity of our hero'
        />

        <Form.Input
          required
          name='hero'
          validate={validateName}
          label='Hero Name'
          placeholder='How do you want to call our hero?'
        />

        <Form.RadioGroup name='cape' label='Wears a cape?' required>
          <Form.Radio label='Yes' value='Yes' />
          <Form.Radio label='No' value='No' />
        </Form.RadioGroup>

        <Form.Select
          name='universe'
          label='Universe'
          width='full'
          options={[
            { value: 'DC', text: 'DC' },
            { value: 'Marvel', text: 'Marvel' },
          ]}
        />
        
        <Container top='medium'>
          <Form.SubmitButton variant='positive'>
            Create
          </Form.SubmitButton>
        </Container>
      </Form>

    </Container>
    
  )
}

const HeroesTable = ({ heroes }: { heroes: Hero[] }) => {
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
          {heroes.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.hero}</Table.Cell>
              <Table.Cell>{row.cape}</Table.Cell>
              <Table.Cell>{row.universe ?? '-'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total</Table.Cell>
            <Table.Cell>{heroes.length}</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      
    </Container>
  )
}

export default TasksTwoThree