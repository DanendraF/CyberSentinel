import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const members = [
    { nim: '23523170', name: 'Danendra Farrel' },
    { nim: '23523185', name: 'Ikhsan Arifianto' },
    { nim: '23523186', name: 'Naura Tsani' },
    { nim: '23523191', name: 'Khalaida Dzia' }
  ]

  res.status(200).json({ success: true, count: members.length, members })
}
