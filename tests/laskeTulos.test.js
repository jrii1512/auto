import { assertEquals } from "https://deno.land/std@0.118.0/testing/asserts.ts";

import { laskeTulo } from "..laskeTulo.js";

Deno.test("Laske tulo", () => {
    const tulo = laskeTulo(3,3);
    assertEquals(tulo, 9);
});
