import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    include: [...configDefaults.include],
    exclude: [...configDefaults.exclude]
  }
});
