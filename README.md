# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

## Live demo

Solution URL: [https://audiophile-website-six.vercel.app/](https://audiophile-website-six.vercel.app/)

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out
- Saving the items in the cart after a browser reload

## Built with

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Storybook](https://storybook.js.org/) - Isolating UI components

### **Continued development**

In the future I am planning to implement these features:

- Mock online payment with [Stripe](https://stripe.com/en-dk/)
- Authentification with [Firebase](https://firebase.google.com/)
- Animations

## What I learned

### **Project structure**

The first thing I learned was setting up a strict project structure that can scale. I engine locked it on **yarn** and used [husky](https://typicode.github.io/husky/#/) to create Git Hooks. It runs scripts at different git stages. I set it up to run **yarn lint** on commit and **yarn build** on push. In doing so, I ensured that I was not allowed to push unless the code was successfully build.

I then added [commitlint](https://commitlint.js.org/#/) to enforce a structure in my commit messages.

And of course it wouldn't be a **strict** project without type checking provided by Typescript.

### **Components structure**

I arranged my components by their UI type and for each of them created three files:

- FileName.tsx - the actual component that will be exported and used
- FileName.Stories.tsx - a storybook file to quickly preview and edit the component
- FileName.mocks.ts - a set of mock props that serve as default values for the Storybook file

When I needed to create a component I ran a script I wrote that would take a name variable and create the files for me.

### **Layouts and rendering**

I used NextJS' **Layouts** feature to create a primary layout that includes the header and footer. I also made a separate Advert layout that is present on most pages except the checkout form.

In terms of rendering, I have two static generated pages (the home page and the checkout page). The other pages are using **Dynamic Routes** and are pre-rendered with Static Site Generation (SSG). For example, take the Product page.

```jsx
// I used getStaticPros to tell Next.js to statically pre-render all my  product pages
export const getStaticProps: GetStaticProps<PageProps, ContextParams> = async (
  context
) => {
  // I got the product using the getStaticPaths function
  const product = context.params?.product;

  // The database variable holds all my products, so now I am testing which product
  // matches the one received by using getStaticPaths
  const products: IProductData[] = database.filter(
    (result) => result.slug === product
  );

  // Pass that product as a prop
  return {
    props: {
      products,
    },
  };
};
```

### **State Management**

As the app grew in size I realized I need to bring in a state management library like **Redux Toolkit**.
I used Toolkit mainly for the advantage of writing immutable logic using a much cleaner and easier "mutable" syntax.

I used it to control the open states for the Cart and BurgerMenu modals so they won't be open at the same time.
Next, I wrote a slice to deal with the cart logic, how to add an item, remove it, keep track of the total price etc.

```jsx
// This reducer function runs when the user clicks on the "ADD TO CART" on the product page
// It runs after another reducer that will add the product to the cartItems array
incrementByAmount: (state, { payload }) => {
    // I find the product I want to add to
    const cartItem = state.cartItems.find((item) => item.id === payload.id);
    if (cartItem) {
      // The payload has a initialQuantity value which is the value we want
      // to add to the cart (is set in ProductInfoCard.tsx)
      // itemQuantity is the quantity we already have in the basket for that item
      cartItem.itemQuantity += payload.initialQuantity;
    }
  },
```

📝 Just small node on **Redux** and state management. I know I could've used something like useContext, but I decided against it
for two main reasons:

1. Even though using Redux was a boilerplate hell, it helped me keep a very clear structure of my states and reducer functions.
   I decided to write more boilerplate to maintain a cleaner project structure.
2. I used useContext before and I wanted to try Redux because I knew it becomes more and more efficient as the app grows in size.
   It's something I noticed first hand even with something small like this project. There are definitely benefits for medium to big apps.

### **localStorage**

One thing I really wanted to include was some sort of persisting logic and I implemented localStorage.

**THE PROBLEM**

Because my pages were pre-rendered the header and more specifically the cart was pre-rendered as "empty".
When I implemented the localStorage the updated cart I was now rendering, that already had items inside, did not match the files
uploaded to the CDN by the pre-rendering resulting in an error.

**THE SOLUTION**

I figured there must bye a way to dynamically render just the header, since that's where the discrepancy was happening.
I went to the Next.js documentation and saw there was a way to exclude a component from the initial page JS bundle
using **next/dynamic** and **Suspense**. I then updated my PrimaryLayout to exclude the header from the initial bundle.

```jsx
const DynamicHeader = dynamic(() => import('../../navigation/header/Header'), {
  ssr: false,
});

<Suspense fallback={`Loading...`}>
  <DynamicHeader />
</Suspense>;
```

## Objective results (Lighthouse test)

![Lighthouse test result for the home page on mobile](https://lh3.googleusercontent.com/hbq7-lArF2Tbejb4kNfBjX1xleOAds2ivFE6zC3w6X2RSYLFkxEb0PKA9mu2o33zsAi27IwLMhdyPEe5jL-g5H7BQ-jGhSp8ggfsKN-9P0vL38ELcnN4UEe8w4Afo4XbLx0cCtsDrbHlPh35U-zKS47sfF2460QLpp2pxjncEYuxZjylwngusQtkIlzHOFH9O220bFvDA3FgHX5xurfHFajZOumsUA0ihLzCAkAQnslfvfnEDceDfw9NsvgU51sPL1xK2gwpLuhHXHy46AqvxZF4o46G_VdE8XeVB14ysE2XjIk4po56s5dbYpvce7qIIPz5yLx5Iam5KLqm1d5EK7hSFTHEA9KHtmoT0Z3WkVEJ4ofY_61IB8U5W2vRp-rU1Uda1LRRBuLMOZhCAWdTD7QjBeU_57FrebN3R_1nOro2PtweBqCWmtNuW29htWbyNCy6MqdW0UeJXFtpHDyPYW-EoBFbTakBxjzGLVc7qVOSIztfP6S-ixemWRAEoc38WpG7ek4h0bXKTgSqND76F58znEbu42Nk9nAVkO3_PRPsAIZgilYs6SpLfAVvKNex9NnzK3nGb-EiGZ1IosUDaIorECzKd71h3guIS4TI13hD8lB9bqhqxkhk2KniJtXODGuxK0ODXzwRr3UcDHtqeetjkda5tOQxNJcEb8ikSYtqA8Hxt4P9Enj6KMSoYHTIj1GLpWk_TCGZQWkPP4cik74bX9WuW8ku2Or1PAyG1Zv8GTXJbQLIGqu6LWEc7S_MjiFEKYjLMhkHK0O_QrlYPka5X-NvcVV-9dSDhQzwIHm2hgeuqI3bFdZT9xFIbgcO72DYXqAcolaYghI-2J4R-ItXrCTYRY3Q8obu425hp-t2Da4eS7cHwTLtbFZlue17ti172ga63-wEpYoeSrJv_jWjatRjkVf6-wnckg=w776-h441-no?authuser=0 'Lighthouse test result for the home page on mobile')

![Lighthouse test result for the product page on mobile](https://lh3.googleusercontent.com/HqMviVMa3wM8E1g5rgZTxHS0Knf7SticqwXHLAEdLuloU96FfG8BbDrF9VJ11BN5e87vAGbOtYXdzAg1Wtyvu8ZKw4pC2MduK_bfHRQlVtgNZrCWTztBs1F9r7_ohK5ozj_tZqaO8WeA7aPI5Fy6AzNU9H948Wxg-2DzxhCA9aq4gUfZbXzkOrbXTDcAt4rKL7j8zP7RncetTb7ZUkZk2cn_jTzYk5KTOO--eQBlrx43xlzD-6vq7HA1WCu-uIjOpTgklxnToIP_UqzNWNy67HYX7NmqZf536oV3E-DicKuhjP_oMWElITXh-WCHt0BI3O_Em0caCZiW-4khSpXWn9bJJ77aUD3etncxIzZKKnBwZDB5wJ6H14u2UAMbdmqdFOknbUoOlK-36k6fZ50wfFJET8oY1wo6eM3DAV2-U5PhiJvLZANq7-d_jzTUfoydoHT9QPoDmkgY8I2eYeLmd-LeTMugzcaNxmb57P2b_NEG1tbYDf97N2hx492uNDCaosSexlQgHUsoGuFCWZxwnu0fUyGiohFNr4kDzE1qxTaX7BqbsZ4KR0H25pTqO5l_vtCg-NKrkFI_FMf-Pv4-13QyGmyM8nX3pU-Nud9PLSk_Gg91gE1M0W5HMj6Xcaclz6i_OAsyVU45wM_2m41RdsPSOK32mr2hmCBJLBGzXlzDKlMsiUWBtxiko1Ta-UPdvKW9ZmK1-SOvWFbgz_zaV6MGUEMitcpG65wrIiNvIJx66yYRb2B0sN-flmSiudeZu5D7p4S9cr1UvWWGLL3IqsWZX2qO5p0WqafKupW6Os4bwbwnk-hpy5xZ_Gz045LeyKFxbxxIG8RwTi-9NskylCQx7mosPJPyjx0EBvGcCzGT4j_ybOACfT4wGDWoZKyhhqPDEI-zLa5wXh0xzCKOxd06REt3EPX-GlUGzg=w776-h441-no?authuser=0 'Lighthouse test result for the product page on mobile')

All other pages perform similarly on both desktop and mobile tests.

## Useful resources

- Front End Mentor that provided the design and assets - [Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)
- Alex Eagleson video on "How to Build Scalable Architecture for your Next.js Project" - [Alex Eagleson](https://youtu.be/Iu5aZDqZt8E)
- DEV article on how to persist state using Redux and Next.js - [DEV.to](https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67)
- [Schema.org](https://schema.org/)

## Author

- Portfolio - [georgendesign.com](https://www.georgendesign.com/)
- LinkedIn - [George Nicolae](https://www.linkedin.com/in/georgenicolae07/)
