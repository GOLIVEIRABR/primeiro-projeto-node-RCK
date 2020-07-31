import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'; // decorator

import User from './User';
/**
 * appointments = nome da tabela @decorator: pega a função Entity e
como parâmetro irá enviar a classe Appointment. Ou seja, toda vez que
um model for salvo, os dados serão enviados para a tabela 'appointments'
 */
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  // Informações sobre o relacionamento
  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;
  // fim das informações

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
