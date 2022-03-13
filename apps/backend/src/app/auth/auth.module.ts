import {Module} from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from "./strategies/local.strategy";
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '300s'}
    })
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    LocalAuthGuard
  ],
  exports: [AuthService]
})
export class AuthModule {
}
