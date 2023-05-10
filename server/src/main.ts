import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { apiBlog } from "contract";
import { generateOpenApi } from "@ts-rest/open-api";
import { SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = generateOpenApi(apiBlog, {
    info: {
      title: "Posts API",
      version: "1.0.0",
    },
  }, {
    setOperationId: true,
  });

  SwaggerModule.setup("api", app, document);
  //                   ^ Path for swagger

  await app.listen(3000);
}
bootstrap();

// swagger-ui: http://localhost:3000/api
// spec: http://localhost:3000/api-json
