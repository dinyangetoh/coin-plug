import {Module} from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from "./local.strategy";
import {LocalAuthGuard} from "./local-auth.guard";
import {AuthService} from "./auth.service";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthModule, AuthService, LocalStrategy, LocalAuthGuard]
})
export class AuthModule {
}
