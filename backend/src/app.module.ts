import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FavoritesModule } from './favorites/favorites.module';
import { WatchlistModule } from './watchlist/watchlist.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, MoviesModule, GenresModule, ReviewsModule, FavoritesModule, WatchlistModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
