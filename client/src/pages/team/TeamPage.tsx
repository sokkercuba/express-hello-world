import PageTabs from '../../components/PageTabs'

const Tabs = [
  { label: 'MAIN', children: 'MAIN DATA' },
  { label: 'JUNIORS', children: 'JUNIORS DATA' }
]

export default function PlayersPage() {
  return <PageTabs tabs={Tabs} />
}
