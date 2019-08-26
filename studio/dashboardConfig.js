export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d63f1e997e9e8bec29e8a11',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jevfvhmk',
                  apiId: '5a703bd3-687b-4595-b6f4-58d5fee2279e'
                },
                {
                  buildHookId: '5d63f1e91c5e2f0c56802b6f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rsmswi2y',
                  apiId: 'f20c2408-a1fa-4cb9-9c90-37010caba261'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a2937/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rsmswi2y.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
