const organizationsMock = {
  totalPages: 1,
  currentPageIndex: 1,
  totalRecords: 20,
  returnedRecords: 4,
  items: [
    {
      organizationId: 1,
      title: 'Adidas',
      mandatoryTags: ['adidas'],
      wom: 5250418,
    },
    {
      organizationId: 2,
      title: 'Movenpick',
      mandatoryTags: ['moevenpick', 'movenpick'],
      wom: 5250418,
    },
    {
      organizationId: 3,
      title: 'DeWalt',
      mandatoryTags: ['dewalt'],
      wom: 5250418,
    },
    {
      organizationId: 4,
      title: 'CommerzBank',
      mandatoryTags: ['commerzbank'],
      wom: 5250418,
    },
  ],
};

export default organizationsMock;
