// @ts-check
const { test } = require("@playwright/test");

test.use({
  locale: "ko-KR",
});

test("has title", async ({ page }) => {
  await page.goto("https://medistream.co.kr/");

  await page.getByText("7일 동안 보지 않기").click();

  await page.getByRole("link", { name: "글쓰기" }).click();

  await new Promise((r) => setTimeout(r, 5000));
});
