import { style, fontFace } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

const Hack = fontFace({
  src: 'url("/fonts/Hack-Regular.ttf")',
})


export const preStyle = style({
  overflowX: 'auto',
  padding: '1rem 0',
  border: '1px solid #8b8b8b',
  marginTop: '50px',
});

export const strongStyle = style({
  fontWeight: 550,
  color: vars.themeColor.color.mainFontColor
})

export const codeTitleStyle = style({
  fontSize: '1.1rem',
  fontWeight: 500,
  padding: '0.6rem 0.8rem',
  border: '1px solid #8b8b8b',
  borderTopLeftRadius: '0.4rem',
  borderTopRightRadius: '0.4rem',
  borderBottomStyle: 'none',
});

export const codeTitleNextPreStyle = style({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
});

export const codeStyle = style({
  fontFamily: Hack,
  fontSize: '1rem',
  lineHeight: 1.5,
  padding: '0.2rem 1rem',
  borderRadius: '0.2rem',
  margin: '20px 0'
});

export const headingStyle = {
  h1: style({
    fontSize: '2.7rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: 1.5
  }),
  h2: style({
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '1.25rem',
    lineHeight: 1.5
  }),
  h3: style({
    fontSize: '1.95rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: 1.5
  }),
  h4: style({
    fontSize: '1.7rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    lineHeight: 1.5
  })
};

export const paragraphStyle = style({
  marginBottom: '1rem',
  lineHeight: 1.7,
  fontSize: '1.15rem',
  padding: '10px 0'
});

export const listStyle = {
  unordered: style({
    listStyleType: 'disc',
    marginLeft: '0.5rem',
    marginBottom: '1rem'
  }),
  ordered: style({
    listStyleType: 'decimal',
    marginLeft: '0.5rem',
    marginBottom: '1rem'
  }),
  item: style({
    marginBottom: '0.5rem'
  })
};

export const linkStyle = style({
  color: '#6daff2',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none'
  }
});

export const blockquoteStyle = style({
  borderLeft: '4px solid #e2e8f0',
  paddingLeft: '0.7rem',
  marginLeft: 0,
  marginRight: 0,
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  fontStyle: 'italic'
});

export const tableStyle = {
  table: style({
    width: '100%',
    marginBottom: '1rem',
    borderCollapse: 'collapse'
  }),
  header: style({
    backgroundColor: '#f7f7f7',
    padding: '0.6rem',
    borderBottom: '2px solid #e2e8f0',
    textAlign: 'left'
  }),
  cell: style({
    padding: '0.6rem',
    borderBottom: '1px solid #e2e8f0'
  })
};

export const imageStyle = style({
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  margin: '1rem 0',
  objectFit: 'contain',
});
