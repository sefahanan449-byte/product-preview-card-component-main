import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-[#f2eae2] flex items-center justify-center p-4">

    <article class="w-full max-w-150 bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">

      <!-- Product Image -->
      <picture class="w-full md:w-1/2">
        <source
          media="(min-width: 768px)"
          srcset="/images/image-product-desktop.jpg"
        />

        <img
          src="/images/image-product-mobile.jpg"
          alt="Gabrielle Chanel perfume"
          class="block w-full h-full object-cover"
        />
      </picture>

      <!-- Product Details -->
      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-4">

        <p class="text-xs uppercase tracking-[0.3em] text-gray-500">
          Perfume
        </p>

        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Gabrielle Essence Eau De Parfum
        </h1>

        <p class="text-sm leading-relaxed text-gray-500">
          A floral, solar and voluptuous interpretation composed by
          Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <!-- Prices -->
        <div class="flex items-center gap-4">
          <p class="text-3xl font-bold text-[#3c8067]">
            $149.99
          </p>

          <p class="text-sm text-gray-500 line-through">
            $169.99
          </p>
        </div>

        <!-- Add to Cart -->
        <button
          type="button"
          class="w-full flex items-center justify-center gap-3 rounded-lg bg-[#3c8067] py-3 font-semibold text-white transition-colors hover:bg-[#1a4031] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a4031] cursor-pointer"
        >
          <img
            src="/images/icon-cart.svg"
            alt=""
            class="h-4 w-4"
          />
          Add to Cart
        </button>

      </div>

    </article>

  </main> `