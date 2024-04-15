// @ts-check
const { test, expect } = require("@playwright/test");

const authFile = "playwright/.auth/user.json";

test.use({
  locale: "ko-KR",
});

test("setup", async ({ page }) => {
  await page.goto("https://medistream.co.kr/");

  await page.getByRole("button", { name: "네이버로 시작하기" }).click();

  await page.waitForURL((url) => {
    return url.href.startsWith("https://nid.naver.com/oauth2.0/authorize");
  });

  await page.getByPlaceholder("아이디").fill("medistream-test");
  await page.getByPlaceholder("비밀번호").fill("test369!");

  await page.getByRole("button", { name: "로그인" }).click();

  await page.waitForURL((url) => {
    return url.href.startsWith("https://medistream.co.kr/");
  });

  await page.context().storageState({ path: authFile });
});
