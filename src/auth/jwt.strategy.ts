import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly secretKeys: string[];
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: (req, rawJwtToken, done) => {
        this.getSecretOrKey(rawJwtToken, done);
      },
    });

    this.secretKeys = [
      this.configService.get<string>('SECRET_KEY_JWT_CAIXA'),
      this.configService.get<string>('SECRET_KEY_JWT_PARENT'),
      this.configService.get<string>('SECRET_KEY_JWT_STUDENT'),
    ].filter(Boolean);
  }

  private getSecretOrKey(
    rawJwtToken: string,
    done: (err: any, secret?: string) => void,
  ) {
    const payload = jwt.decode(rawJwtToken);

    if (!payload) {
      return done(new UnauthorizedException('Token inválido'), null);
    }

    for (const secret of this.secretKeys) {
      try {
        jwt.verify(rawJwtToken, secret);
        return done(null, secret);
      } catch {
        continue;
      }
    }

    return done(
      new UnauthorizedException('Nenhum segredo válido encontrado'),
      null,
    );
  }

  async validate(payload: any) {
    if (!payload) {
      throw new UnauthorizedException('Token inválido');
    }
    return payload;
  }
}
