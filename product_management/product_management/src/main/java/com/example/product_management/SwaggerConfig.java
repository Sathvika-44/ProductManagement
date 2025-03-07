<<<<<<< HEAD
package com.example.product_management;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class SwaggerConfig implements WebMvcConfigurer {
    @Bean
    public OpenAPI apiInfoMetaData() {
        return new OpenAPI()
                .info(new Info().title("Product Management Backend API")
                        .description("Product Management Application Backend API ")
                        .version("v0.0.1")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Product Management Backend API Documentation")
                        .url("https://ProductManagement.wiki.github.org/docs"));
    }
}
=======
package com.example.product_management;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class SwaggerConfig implements WebMvcConfigurer {
    @Bean
    public OpenAPI apiInfoMetaData() {
        return new OpenAPI()
                .info(new Info().title("Product Management Backend API")
                        .description("Product Management Application Backend API ")
                        .version("v0.0.1")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Product Management Backend API Documentation")
                        .url("https://ProductManagement.wiki.github.org/docs"));
    }
}
>>>>>>> b9c8a9b (initial push)
