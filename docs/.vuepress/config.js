module.exports = {
  base: '/documentation/',
  head: [ ['link', { rel: 'icon', href: '/img/favicon.png' }] ],
  title: 'Skhokho Business Software',
  description: 'Skhokho Business Management Software is an intergrated cloud based company software designed for small to medium sized businesses, to help them manage their day to day  activities.',
  themeConfig: {
    searchPlaceholder: 'Search...',
    logo: '/img/favicon.png',
    nav: [
      { text: 'Home', link: 'https://skhokho.io' },
      { text: 'Quick Start', link: '/guide/' },
      { text: 'Personal', link: '/personal/' },
      { text: 'Manager', link: '/manager/' },
      { text: 'OKR', link: '/okr/' },
      { text: 'HR', link: '/hr/' },
      { text: 'Project', link: '/project/' },
      { text: 'Clients', link: '/client/' },
      { text: 'Accounting', link: '/accounting/' },
      { text: 'Sales', link: '/sales/' }
    ],
    sidebar: {
      '/guide/': ['', 'company', 'personal', 'calendar', 'meetings', 'notes'],
      '/personal/': ['', 'leave', 'payslips', 'expenses', 'policy'],
      '/manager/': ['', 'tasks', 'hr', 'leave', 'expenses'],
      '/okr/': ['', 'objectives', 'keyresults', 'tasks'],
      '/hr/': ['', 'employees', 'payroll'],
      '/project/': ['', 'clients', 'project', 'meetings', 'documents', 'notes'],
      '/client/': ['', 'portal'],
      '/accounting/': ['', 'products', 'vendors', 'clients', 'quotes', 'invoices', 'expenses'],
      '/sales/': ['', 'contacts', 'groups', 'hustle', 'meetings', 'documents', 'notes']
    },
    displayAllHeaders: true
  }
}
